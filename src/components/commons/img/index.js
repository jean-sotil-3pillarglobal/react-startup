import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  withStyles,
} from '@material-ui/core';

import GetImage from '../../../providers/utils/smart.img';

const styles = theme => ({
  img: {
    width: '100%',
  },
});

class LayoutImg extends Component {
  render() {
    const { classes, device, src } = this.props;

    return (
      <img className={classes.img} src={GetImage(device, src)} />
    );
  }
}

export const SmartImg = withStyles(styles)(LayoutImg);
