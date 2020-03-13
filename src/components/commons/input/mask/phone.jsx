// @flow

import React, { Fragment } from 'react';
import MaskedInput from 'react-text-mask';

function MaskPhone (props: {
  inputRef: Function,
}) {
  const {
    inputRef,
    ...other
  } = props;

  const mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  return (
    <Fragment>
      <MaskedInput
        {...other}
        mask={mask}
        showMask
        keepCharPositions
        guide={false} />
    </Fragment>
  );
}

export default MaskPhone;
