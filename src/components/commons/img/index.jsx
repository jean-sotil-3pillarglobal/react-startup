import React, { Component } from 'react';

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
    classes: Object,
    proxy: Object,
    src: string,
    alt: string,
  };

  render () {
    const { classes, proxy, src, alt } = this.props;
    const { device, verbiage } = proxy;
    return (
      verbiage && <img className={classes.img} src={verbiage(src)[device]} alt={verbiage(alt)} />
    );
  }
}

export const SmartImg = withStyles(styles)(LayoutImg);
