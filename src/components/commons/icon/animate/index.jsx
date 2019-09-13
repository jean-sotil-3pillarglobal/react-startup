import React, { Component, Fragment } from 'react';
import {
  MorphIcon,
} from 'react-svg-buttons';

import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({});

const defaultIcon = 'thunderbolt';

class IconAnimate extends Component {
  state = {
    type: defaultIcon,
  };

  props: {
    className: string,
    onClick: Function,
    type: string,
  }

  handleMouseOver = () => {
    this.setState({
      type: defaultIcon,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      type: this.props.type || defaultIcon,
    });
  }

  render() {
    const { onClick, className } = this.props;
    const { type } = this.state;

    return (
      type &&
      <Fragment>
        <MorphIcon className={className} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} type={type} onClick={onClick} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(IconAnimate);
