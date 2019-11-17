import React from 'react';
import classnames from 'classnames';
import {
  Icon,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  root: props => ({
    color: (props.color === 'error') ?
      theme.palette.error.main :
      ((props.color === 'success') ? (theme.palette.success.main) : (props.color || theme.palette.primary.main)),
  }),
});

function IconLayout (props: {
  classes: Object,
  className: Object,
  name: Object,
}) {
  const {
    classes,
    className,
    name,
  } = props;

  return (
    <Icon className={classnames(classes.root, className)}>
      {name}
    </Icon>
  );
}

export default withStyles(styles)(IconLayout);
