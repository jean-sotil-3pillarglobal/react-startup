import React, { Component } from 'react';
import classnames from 'classnames';

import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  img: {
    width: '100%',
  },
});

class LayoutImg extends Component {
  props: {
    alt: string,
    classes: Object,
    className: Object,
    proxy: Object,
    src: string,
  };

  render () {
    const {
      alt,
      classes,
      className,
      proxy,
      src,
    } = this.props;

    const {
      device,
      verbiage,
    } = proxy;

    return (
      verbiage && <img
        className={classnames(classes.img, className)}
        src={verbiage(src)[device]}
        alt={verbiage(alt)} />
    );
  }
}

export const SmartImg = withStyles(styles)(LayoutImg);
