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
  container: () => ({
    background: 'transparent',
  }),
  indicatorsContainer: () => ({
    padding: '4px',
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
        width: '90%',
      },
      borderRadius: '0 0 0 0',
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontSize: '.6rem',
      padding: '0',
      textTransform: 'capitalize',
    });
  },
  option: () => ({
    padding: '0',
    textTransform: 'capitalize',
  }),
  placeholder: () => ({
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    fontSize: '1rem',
    fontWeight: 400,
    opacity: 0.5,
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
      background: `${theme.palette.primary.light}`,
      border: `2px solid ${theme.palette.error.main}`,
      borderRadius: '0 0 0 0',
      fontSize: '16px',
      padding: '.6em 0',
      textTransform: 'capitalize',
    });
  } else {
    customStyles.control = (style, { isFocused }) => ({
      '&:hover': {
        border: `2px solid ${theme.palette.utils.highlight}`,
      },
      background: `${theme.palette.primary.light}`,
      border: `2px solid ${isFocused ? theme.palette.utils.highlight : theme.palette.primary.main}`,
      borderRadius: '0 0 0 0',
      fontSize: '1rem',
      fontWeight: 400,
      padding: '8px',
      textTransform: 'capitalize',
    });
  }

  customStyles.Control = () => ({
    '&:hover': {
      boxShadow: `0 0 4px ${theme.palette.utils.highlight}`,
    },
    backgroundColor: ThemeBackground(props, theme, 'dark'),
    color: ThemeColor(props, theme),
  });

  customStyles.option = () => ({
    backgroundColor: ThemeBackground(props, theme, 'light'),
    borderBottom: `2px solid '${ThemeBackground(props, theme, 'dark')}'`,
    fontSize: '12px',
    fontWeight: 400,
    marginBottom: '2px',
    padding: '10px 20px',
    textTransform: 'capitalize',
  });

  customStyles.ValueContainer = () => ({
    padding: '0 0',
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
