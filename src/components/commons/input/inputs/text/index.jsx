// @flow

import React, { Component } from 'react';

import { withStyles, TextField } from '@material-ui/core';

const styles = () => ({
  input: {},
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

class InputBase extends Component {
  shouldComponentUpdate = (nextProps) => {
    return (
      nextProps.value !== this.props.value ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.error !== this.props.error ||
      nextProps.errorMsg !== this.props.errorMsg ||
      nextProps.required !== this.props.required
    );
  };

  props: {
    classes: Object,
    disabled: Boolean,
    error: any,
    errorMsg: any,
    filled: Boolean,
    focused: Boolean,
    inputProps: children,
    inputRef: node,
    label: string,
    name: string,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    options: Array,
    required: Boolean,
    type: string,
    value: any,
  };

  render() {
    const {
      classes,
      error,
      errorMsg,
      filled,
      focused,
      inputProps,
      inputRef,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      options,
      required,
      type,
      value,
    } = this.props;

    console.log(focused, filled);
    return (
      <ForwardTextField
        error={error || false}
        helperText={errorMsg}
        label={label}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        ref={inputRef}
        required={required}
        type={type}
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          ...inputProps,
          className: classes.input,
          disableUnderline: true,
        }}
      />
    );
  }
}

export default withStyles(styles)(InputBase);
