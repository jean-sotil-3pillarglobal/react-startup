// @flow


import React, { useState } from 'react';
import Select, { components } from 'react-select';

import { Controller, useFormContext } from 'react-hook-form';

import {
  FormControl,
  InputLabel,
} from '@material-ui/core';

// components
import Error from '../error';
import Icon from '../../../icon';

const customStyles = {
  control: () => ({
    background: '#f7f7f7',
    border: '1px solid transparent',
    borderRadius: '0 0 0 0',
    fontSize: '16px',
    padding: '.6em 0',
    textTransform: 'capitalize',
  }),
  indicatorsContainer: () => ({
    padding: '8px',
    position: 'absolute',
    right: 0,
    top: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  multiValue: (provided) => {
    return ({
      ...provided,
      '& div:first-of-type': {
        width: '100%',
      },
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      fontSize: '1em',
      fontWeight: 800,
      padding: '4px',
      textTransform: 'capitalize',
      width: '40%',
    });
  },
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
  inputRef: Object,
  isMulti: Boolean,
  label: String,
  name: String,
  onBlur: Function,
  onChange: Function,
  options: Array,
  placeholder: String,
  proxy: Object,
  required: Boolean,
  value: Object,
}, ref) => {
  const {
    disabled,
    inputRef,
    isMulti,
    label,
    name,
    onBlur,
    onChange,
    options,
    placeholder,
    proxy,
    required,
    value,
    ...rest
  } = props;

  const {
    errors,
  } = useFormContext();

  const error = errors[name] !== undefined;

  const [selectVal, setSelectVal] = useState((document && document[name]) || null);
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setSelectVal(e || []);
    onChange(e || []);
    proxy.handleChange({
      target: {
        name,
        value: e || [],
      },
    });
  };

  return (
    <FormControl>
      <InputLabel
        style={{
          fontSize: '0.6em',
          position: 'relative',
          top: '-12px',
          transform: 'initial',
        }}
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
        value={selectVal}
        id={name}
        isMulti={isMulti}
        isClearable
        isDisabled={disabled}
        isSearchable
        focused={focused}
        name={name}
        onBlur={(evt) => {
          onBlur(evt);
          setFocused(false);
        }}
        onChange={handleChange}
        onFocus={() => {
          setFocused(true);
        }}
        options={options}
        placeholder={placeholder}
        inputVariant="filled"
        inputProps={{
          ref,
        }}
        styles={customStyles}
        {...rest}
      />
      {(error && <Error message={errors[name].message} />) || ''}
    </FormControl>
  );
});

function ControllerSelectField (props: {
  inputRef: Object,
  name: string,
  value: Object,
}) {
  const {
    inputRef,
    name,
    value,
  } = props;

  const {
    control,
  } = useFormContext();

  return (
    <Controller
      as={<ForwardTextField {...props} />}
      control={control}
      name={name}
      rules={inputRef}
      value={value}
    />
  );
}

export default ControllerSelectField;
