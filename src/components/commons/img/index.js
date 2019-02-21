import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  withStyles,
} from '@material-ui/core';

import SmartImg from '../../../providers/utils/smart.img';

const styles = theme => ({
  img: {
    width: '100%',
  },
});

class LayoutImg extends Component {
  render() {
    const { classes, device, src } = this.props;

    return (
      <img className={classes.img} src={SmartImg(device, src)} />
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    device: state.getDevice,
  };
}

const Img = connect(mapStateToProps, null)(withStyles(styles)(LayoutImg));

export default Img;
