// @flow


import React, { useState } from 'react';
import Toggle from 'react-toggle';

import { Controller, useFormContext } from 'react-hook-form';

import {
  FormControl,
  InputLabel,
  withStyles,
} from '@material-ui/core';

// components
import Error from '../error';

const styles = () => ({
  root: {},
});

const ForwardCheckField = (props: {
  document: Object,
  label: String,
  name: String,
  onBlur: Function,
  onFocus: Function,
  proxy: Object,
  required: Boolean,
}) => {
  const {
    document,
    label,
    name,
    onBlur,
    onFocus,
    proxy,
    required,
  } = props;

  const {
    errors,
    setValue,
  } = useFormContext();

  const value = document && document[name];
  const [checkVal, setCheckVal] = useState(value || false);

  const error = errors[name] !== undefined;

  const handleChange = (e) => {
    const { target } = e;

    setCheckVal(target.checked);
    setValue(name, target.checked, true);

    console.log(target.checked, 'here');
    proxy.handleChange({
      target: {
        name,
        value: target.checked,
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
      <Toggle
        checked={checkVal}
        className={name}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={e => handleChange(e)}
        onFocus={onFocus}
      />
      {(error && <Error message={errors[name].message} />) || ''}
    </FormControl>
  );
};

function ControllerCheckField (props: {
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
      as={<ForwardCheckField {...props} />}
      control={control}
      name={name}
      rules={rules}
      value={document[name]}
    />
  );
}

export default withStyles(styles, { withTheme: true })(ControllerCheckField);
