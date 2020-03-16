// @flow

import React from 'react';

import { Controller, useFormContext } from 'react-hook-form';
import { withStyles } from '@material-ui/core';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import Error from '../error';

// components
import Icon from '../../../icon';

const styles = () => ({
  input: {
    marginTop: '32px !important',
  },
});

function DateField (props: {
  classes: Object,
  document: object,
  format: string,
  label: string,
  locale: string,
  name: string,
  onFieldChange: Function,
  required: Boolean,
  type: string,
}) {
  const {
    classes,
    document,
    format,
    label,
    locale,
    name,
    onFieldChange,
    required,
    type,
    ...rest
  } = props;

  const {
    errors,
    setValue,
  } = useFormContext();

  const error = errors[name] !== undefined;
  const errorMsg = (error && <Error message={errors[name].message} />) || '';
  const value = (Object.keys(document).includes(name) && document[name]) || null;

  const inputProps = {
    className: classes.input,
    disableUnderline: true,
  };

  const handleChange = (e) => {
    setValue(name, moment(e), true);
    onFieldChange({
      target: {
        name,
        value: moment(e),
      },
    });
  };

  const isDate = format.includes('MM/DD/YYYY');
  const Component = !isDate ? KeyboardTimePicker : KeyboardDatePicker;

  let datePickerProps = {
    ...rest,
  };

  if (isDate) {
    datePickerProps = {
      format,
      KeyboardButtonProps: {
        'aria-label': 'change date',
      },
      variant: 'dialog',
    };
  } else {
    datePickerProps = {
      format,
      keyboardIcon: <Icon name="access_time" color="rgba(0, 0, 0, 0.54)" />,
      variant: 'dialog',
    };
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
      <Component
        className={name}
        error={error}
        helperText={errorMsg}
        format={format}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={inputProps}
        label={label}
        name={name}
        onChange={(e, date) => handleChange(date)}
        placeholder={format}
        required={required}
        type={type}
        value={value}
        openTo={((isDate && (value === null && 'year')) || 'date') || 'hours'}
        {...datePickerProps}
      />
    </MuiPickersUtilsProvider>
  );
}

function ControllerDateField (props: {
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
      as={<DateField {...props} />}
      control={control}
      name={name}
      rules={rules}
      value={document[name]}
    />
  );
}

export default withStyles(styles)(ControllerDateField);
