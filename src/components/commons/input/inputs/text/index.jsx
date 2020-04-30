// @flow

import React, { useState } from 'react';

import { FormControl, withStyles, TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

import Error from '../error';

const styles = () => ({
  input: {
    marginTop: '28px !important',
  },
});

const ForwardTextField = React.forwardRef((props, ref) => {
  return (
    <TextField
      {...props}
      inputProps={{
        ref,
      }}
    />
  );
});

function InputBase (props: {
  classes: Object,
  document: Object,
  inputProps: Object,
  InputProps: Object,
  label: string,
  multiline: Boolean,
  name: string,
  onBlur: Function,
  onFocus: Function,
  options: Array,
  proxy: Object,
  required: Boolean,
  rows: Int,
  type: string,
}) {
  const {
    classes,
    document,
    inputProps,
    InputProps,
    label,
    multiline,
    name,
    onBlur,
    onFocus,
    options,
    proxy,
    required,
    rows,
    type,
  } = props;

  const value = (document && document[name]) || '';
  const [inputValue, setInputValue] = useState(value);

  const {
    errors,
    setValue,
  } = useFormContext();

  const error = errors[name] !== undefined;
  const errorMsg = (error && <Error message={errors[name].message} />) || '';

  const handleChange = (e) => {
    const { target } = e;

    setInputValue(target.value);
    setValue(name, target.value, true);

    proxy.handleChange({
      target: {
        name,
        value: target.value,
      },
    });
  };

  return (
    <FormControl fullWidth>
      <ForwardTextField
        error={error || false}
        helperText={errorMsg}
        label={label}
        multiline={multiline}
        name={name}
        onBlur={onBlur}
        onChange={(e) => handleChange(e)}
        onFocus={onFocus}
        options={options}
        required={required}
        rows={rows}
        type={type}
        value={inputValue}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          ...inputProps,
          ...InputProps,
          className: classes.input,
          disableUnderline: true,
        }}
      />
    </FormControl>
  );
}

function ControllerInputBase (props: {
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

  const value = document[name] || '';

  return (
    <Controller
      as={(
        <InputBase
          name={name}
          key={name}
          {...props}
        />
      )}
      name={name}
      value={value}
      control={control}
      rules={rules}
    />
  );
}

export default withStyles(styles)(ControllerInputBase);
