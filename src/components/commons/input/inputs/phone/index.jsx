// @flow

import React from 'react';
import TextField from '../text';

import MaskPhone from '../../mask/phone';

const PhoneField = (props: {}) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: MaskPhone,
      }}
    />
  );
};

export default PhoneField;
