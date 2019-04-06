import { Component, Fragment } from 'react';
import classnames from 'classnames';
import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({});

class Icon extends Component {
  render() {
    const { name } = this.props;

    return (
      <Fragment>
        <i className={classnames(`uil uil-${name}`, this.props.className)}></i>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Icon);
