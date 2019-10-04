import React from 'react';
import classnames from 'classnames';
import {
  Icon,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  error: {
    color: theme.palette.error.main,
  },
  root: {},
  success: {
    color: theme.palette.success.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
});

function IconLayout (props: {
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
    <Icon className={classnames(classes.root, className)} color={color}>
      {name}
    </Icon>
  );
}

export default withStyles(styles)(IconLayout);
