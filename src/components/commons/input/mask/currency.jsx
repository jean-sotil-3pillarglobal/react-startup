// @flow

import React, { Component, Fragment } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

class MaskCurrency extends Component {
  props: {
    inputRef: Function,
  };

  render() {
    const { inputRef, ...other } = this.props;
    const mask = createNumberMask({
      includeThousandsSeparator: false,
      prefix: '$',
      requireDecimal: true,
    });

    return (
      <Fragment>
        <MaskedInput
          {...other}
          mask={mask}
          showMask
          keepCharPositions
          guide={false}
        />
      </Fragment>
    );
  }
}

export default MaskCurrency;
