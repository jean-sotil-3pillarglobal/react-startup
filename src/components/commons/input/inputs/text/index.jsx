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
    inputProps: children,
    inputRef: node,
    label: string,
    multiline: Boolean,
    name: string,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    options: Array,
    required: Boolean,
    rows: Int,
    type: string,
    value: any,
  };

  render() {
    const {
      classes,
      error,
      errorMsg,
      inputProps,
      inputRef,
      label,
      multiline,
      name,
      onBlur,
      onChange,
      onFocus,
      options,
      required,
      rows,
      type,
      value,
    } = this.props;

    return (
      <ForwardTextField
        error={error || false}
        helperText={errorMsg}
        label={label}
        multiline={multiline}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        ref={inputRef}
        required={required}
        rows={rows}
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
