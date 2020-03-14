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
  inputProps: Object,
  InputProps: Object,
  label: string,
  multiline: Boolean,
  name: string,
  onBlur: Function,
  onChange: Function,
  onFieldChange: Function,
  onFocus: Function,
  options: Array,
  required: Boolean,
  rows: Int,
  type: string,
}) {
  const {
    classes,
    inputProps,
    InputProps,
    label,
    multiline,
    name,
    onBlur,
    onChange,
    onFieldChange,
    onFocus,
    options,
    required,
    rows,
    type,
  } = props;

  const value = (document && document[name]) || '';
  const [inputValue, setInputValue] = useState(value);

  const {
    errors,
  } = useFormContext();

  const error = errors[name] !== undefined;
  const errorMsg = (error && <Error message={errors[name].message} />) || '';

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
    onFieldChange(e);
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
        onChange={e => handleChange(e)}
        onFocus={onFocus}
        options={options}
        required={required}
        rows={rows}
        type={type}
        value={inputValue || ''}
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
  inputRef: Object,
  name: string,
}) {
  const {
    document,
    inputRef,
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
          value={value || ''}
          {...props}
        />
      )}
      name={name}
      value={value}
      control={control}
      rules={inputRef}
    />
  );
}

export default withStyles(styles)(ControllerInputBase);
