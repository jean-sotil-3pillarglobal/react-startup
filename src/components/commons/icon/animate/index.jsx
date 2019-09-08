import { Component, Fragment } from 'react';
import {
  MorphIcon,
} from 'react-svg-buttons';

import {
  withStyles,
} from '@material-ui/core';

const styles = theme => ({});

const defaultIcon = 'thunderbolt';

class IconAnimate extends Component {
  state = {
    type: defaultIcon,
  };

  props: {
    type: string,
    className: string,
    onClick: Function,
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
    const { onClick, customStyle } = this.props;
    const { type } = this.state;

    return (
      type &&
      <Fragment>
        <MorphIcon className={customStyle} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} type={type} onClick={onClick} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(IconAnimate);
