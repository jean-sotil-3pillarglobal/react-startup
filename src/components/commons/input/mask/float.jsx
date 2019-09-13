// @flow

import React, { Fragment } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

function MaskFloat (props: {
  inputRef: Function,
}) {
  const {
    inputRef,
    ...other
  } = props;

  const mask = createNumberMask({
    includeThousandsSeparator: false,
    requireDecimal: true,
  });

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

export default MaskFloat;
