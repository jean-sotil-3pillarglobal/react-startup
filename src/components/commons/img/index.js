import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  img: {
    width: '100%',
  },
});

class LayoutImg extends Component {
  render() {
    const { classes, device } = this.props;
    let { src } = this.props;

    if (device === 'mobile') {
      src = `m-${src}`;
    } else {
      src = `d-${src}`;
    }

    return (
      <img className={classes.img} src={`/resources/images/${src}`} />
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    device: state.getDevice,
  };
}

const SmartImg = connect(mapStateToProps, null)(withStyles(styles)(LayoutImg));

export default SmartImg;
