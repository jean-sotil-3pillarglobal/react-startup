
// @flow

import React, { Fragment } from 'react';
import MaskedInput from 'react-text-mask';

function MaskCredit (props: {
  inputRef: Function,
}) {
  const {
    inputRef,
    ...other
  } = props;

  const mask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

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

export default MaskCredit;
