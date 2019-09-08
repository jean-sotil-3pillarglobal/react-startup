import { Component, Fragment } from 'react';
import classnames from 'classnames';
import {
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  default: {
    color: theme.palette.primary.contrastText,
  },
  error: {
    color: theme.palette.error.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
});

class Icon extends Component {
  render() {
    const { name, classes } = this.props;

    return (
      <Fragment>
        <i className={classnames(`uil uil-${name}`, this.props.className, classes[this.props.color])}></i>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Icon);
