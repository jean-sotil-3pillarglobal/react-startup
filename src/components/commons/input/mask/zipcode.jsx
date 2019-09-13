// @flow

import React, { Fragment } from 'react';
import MaskedInput from 'react-text-mask';

function MaskZip (props: {
  inputRef: Function,
}) {
  const {
    inputRef,
    ...other
  } = props;

  const mask = [/\d/, /\d/, /\d/, /\d/, /\d/];

  return (
    <Fragment>
      <MaskedInput
        {...other}
        mask={mask}
        keepCharPositions />
    </Fragment>
  );
}

export default MaskZip;
