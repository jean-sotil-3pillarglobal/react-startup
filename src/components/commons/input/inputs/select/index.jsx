// @flow


import React, { Component } from 'react';
import Select from 'react-select';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  input: {},
});

const ForwardTextField = React.forwardRef((props: {
  disabled: Boolean,
  error: any,
  errorMsg: any,
  isMulti: Boolean,
  label: String,
  name: String,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  options: Array,
  placeholder: String,
  required: Boolean,
  value: String,
}, ref) => {
  const {
    disabled,
    error,
    errorMsg,
    isMulti,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    options,
    placeholder,
    required,
    value,
  } = props;
  console.log(placeholder);
  return (
    <FormControl>
      <InputLabel error={error || false} htmlFor={name} required={required} shrink>
        {label}
      </InputLabel>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={value}
        id={name}
        isMulti={isMulti}
        isClearable
        isDisabled={disabled}
        isSearchable
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        placeholder={placeholder}
        value={value}
        inputProps={{
          ref,
        }}
      />
      {error && <FormHelperText error={error}>{errorMsg}</FormHelperText>}
    </FormControl>

  );
});

class InputSelectBase extends Component {
  handleChange = (event) => {
    const {
      onChange,
      name,
    } = this.props;

    onChange({
      target: {
        name,
        value: event,
      },
    });
  }

  props: {
    disabled: Boolean,
    error: Boolean,
    errorMsg: String,
    inputRef: any,
    name: String,
    onChange: Function,
    required: Boolean,
  };

  render() {
    const {
      inputRef,
    } = this.props;

    return (
      <ForwardTextField
        {...this.props}
        ref={inputRef}
        onChange={this.handleChange}
      />
    );
  }
}

export default withStyles(styles)(InputSelectBase);
