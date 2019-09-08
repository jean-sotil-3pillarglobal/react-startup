// @flow

import React, { Component, Fragment } from 'react';
import MaskedInput from 'react-text-mask';

class MaskZip extends Component {
  props: {
    inputRef: Function,
  };

  render() {
    const { inputRef, ...other } = this.props;
    const mask = [/\d/, /\d/, /\d/, /\d/, /\d/];

    return (
      <Fragment>
        <MaskedInput
          {...other}
          mask={mask}
          keepCharPositions
        />
      </Fragment>
    );
  }
}

export default MaskZip;
