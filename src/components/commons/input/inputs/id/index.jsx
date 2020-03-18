// @flow

import React from 'react';
import TextField from '../text';

import maskId from '../../mask/id';

const IdField = (props: {}) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: maskId,
      }}
    />
  );
};

export default IdField;
