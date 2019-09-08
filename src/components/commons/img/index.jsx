import { Component } from 'react';

import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  img: {
    width: '100%',
  },
});

class LayoutImg extends Component {
  render() {
    const { classes, proxy, src } = this.props;
    const { device, verbiage } = proxy;
    return (
      verbiage && <img className={classes.img} src={verbiage(src)[device]} />
    );
  }
}

export const SmartImg = withStyles(styles)(LayoutImg);
