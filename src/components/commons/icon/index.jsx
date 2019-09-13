import React, { Fragment } from 'react';
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

function Icon (props: {
  classes: Object,
  className: Object,
  color: string,
  name: Object,
}) {
  const {
    classes,
    className,
    color,
    name,
  } = props;

  return (
    <Fragment>
      <i className={classnames(`uil uil-${name}`, className, classes[color])} />
    </Fragment>
  );
}

export default withStyles(styles)(Icon);
