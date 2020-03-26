// @flow


import React, { useState } from 'react';
import Select, { components } from 'react-select';

import { Controller, useFormContext } from 'react-hook-form';

import {
  FormControl,
  InputLabel,
  withStyles,
} from '@material-ui/core';

// components
import Error from '../error';
import Icon from '../../../icon';

import ThemeBackground from '../../../../../providers/utils/theme.background';
import ThemeColor from '../../../../../providers/utils/theme.color';

const styles = () => ({
  root: {},
});

const customStyles = {
  indicatorsContainer: () => ({
    padding: '8px',
    position: 'absolute',
    right: 0,
    top: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: () => ({
    borderRadius: '0 0 0 0',
    margin: 0,
    padding: 0,
  }),
  multiValue: (provided) => {
    return ({
      ...provided,
      '& div:first-of-type': {
        width: '100%',
      },
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontSize: '1em',
      padding: '4px',
      textTransform: 'capitalize',
    });
  },
  option: () => ({
    fontSize: '0.9em',
    fontWeight: 500,
    padding: '8px',
    textTransform: 'capitalize',
  }),
  placeholder: () => ({
    display: 'none',
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    fontSize: '1.2em',
    fontWeight: 800,
  }),
};

const DropdownIndicator = (props: ElementConfig<typeof components.DropdownIndicator>) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name="error_outlined" color="error" />
    </components.DropdownIndicator>
  );
};

const ForwardTextField = React.forwardRef((props: {
  disabled: Boolean,
  document: Object,
  focused: Boolean,
  isMulti: Boolean,
  label: String,
  name: String,
  onBlur: Function,
  onFocus: Function,
  options: Array,
  placeholder: String,
  proxy: Object,
  required: Boolean,
  theme: Object,
}, ref) => {
  const {
    disabled,
    document,
    focused,
    isMulti,
    label,
    name,
    onBlur,
    onFocus,
    options,
    placeholder,
    proxy,
    required,
    theme,
  } = props;

  const {
    errors,
    setValue,
  } = useFormContext();

  const error = errors[name] !== undefined;
  const value = document && document[name];

  const [selectVal, setSelectVal] = useState(value || []);

  const handleChange = (e) => {
    setSelectVal(e || []);
    setValue(name, e || [], true);

    proxy.handleChange({
      target: {
        name,
        value: e || null,
      },
    });
  };

  if (error) {
    customStyles.control = () => ({
      background: '#f7f7f7',
      border: '1px solid red',
      borderRadius: '0 0 0 0',
      fontSize: '16px',
      padding: '.6em 0',
      textTransform: 'capitalize',
    });
  } else {
    customStyles.control = () => ({
      background: '#f7f7f7',
      border: '1px solid transparent',
      borderRadius: '0 0 0 0',
      fontSize: '16px',
      padding: '.6em 0',
      textTransform: 'capitalize',
    });
  }

  customStyles.Control = () => ({
    backgroundColor: ThemeBackground(props, theme, 'dark'),
    color: ThemeColor(props, theme),
  });

  customStyles.option = () => ({
    backgroundColor: ThemeBackground(props, theme, 'light'),
    borderBottom: `2px solid '${ThemeBackground(props, theme, 'main')}'`,
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '2px',
    padding: '10px 15% 10px 28px',
    textTransform: 'capitalize',
  });

  return (
    <FormControl>
      <InputLabel
        style={{
          fontSize: '0.6em',
          position: 'relative',
          top: '-12px',
          transform: 'initial',
        }}
        focused={focused}
        error={error || false}
        htmlFor={name}
        required={required}
      >
        {label}
      </InputLabel>
      <Select
        className={name}
        closeMenuOnSelect={false}
        components={errors[name] !== undefined && { DropdownIndicator }}
        defaultValue={selectVal}
        error={error || false}
        focused={focused}
        id={name}
        inputVariant="filled"
        isClearable
        isDisabled={disabled}
        isMulti={isMulti}
        isSearchable
        name={name}
        onBlur={onBlur}
        onChange={e => handleChange(e)}
        onFocus={onFocus}
        options={options}
        placeholder={placeholder}
        value={document[name] || selectVal}
        inputProps={{
          ref,
        }}
        styles={customStyles}
      />
      {(error && <Error message={errors[name].message} />) || ''}
    </FormControl>
  );
});

function ControllerSelectField (props: {
  document: Object,
  rules: Object,
  name: string,
}) {
  const {
    document,
    rules,
    name,
  } = props;

  const {
    control,
  } = useFormContext();

  return (
    <Controller
      as={<ForwardTextField {...props} />}
      control={control}
      name={name}
      rules={rules}
      value={document[name]}
    />
  );
}

export default withStyles(styles, { withTheme: true })(ControllerSelectField);
