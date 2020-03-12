// @flow

import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import Error from '../error';

const styles = () => ({
  input: {},
});

const ForwardTextField = React.forwardRef((props, ref) => {
  return (
    <KeyboardTimePicker
      {...props}
      variant="dialog"
      openTo="year"
      inputProps={{
        ref,
      }}
    />
  );
});

class DateField extends Component {
  shouldComponentUpdate = (nextProps) => {
    return (
      nextProps.value !== this.props.value ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.required !== this.props.required
    );
  };

  props: {
    classes: Object,
    disabled: Boolean,
    fieldType: string,
    formProps: Object,
    id: string,
    inputComponent: children,
    inputRef: node,
    locale: String,
    name: string,
    onChange: Function,
    options: Array,
    required: Boolean,
    type: string,
    value: any,
  };

  handleChange = (e) => {
    const {
      formProps: {
        clearError,
        setValue,
      },
      name,
      onChange,
    } = this.props;

    const date = moment(e);

    if (e && date.isValid()) {
      clearError(name);
    }

    setValue(name, (e || null), true);

    onChange({
      target: {
        name,
        value: e,
      },
    });
  };

  render() {
    const {
      classes,
      fieldType,
      formProps,
      inputComponent,
      inputRef,
      name,
      onChange,
      options,
      required,
      type,
      value,
      ...props
    } = this.props;

    const {
      errors,
      register,
    } = formProps;

    const error = errors[name] !== undefined;
    const errorMsg = (error && <Error message={errors[name].message} />) || '';

    const inputProps = {
      className: classes.input,
      disableUnderline: true,
    };

    delete props.formProps;
    delete props.focused;
    delete props.filled;

    return (
      <MuiPickersUtilsProvider utils={MomentUtils} locale={props.locale}>
        <ForwardTextField
          className={name}
          error={error}
          helperText={errorMsg}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={inputProps}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          name={name}
          onChange={this.handleChange}
          placeholder="mm/dd/yyyy"
          ref={register(inputRef)}
          required={required}
          type={type}
          value={value || null}
          {...props}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default withStyles(styles)(DateField);
