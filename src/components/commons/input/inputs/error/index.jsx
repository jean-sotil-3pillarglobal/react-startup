// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
  Typography,
} from '@material-ui/core';

// components
import Icon from '../../../icon';

const styles = theme => ({
  container: {
    display: 'inline',
    lineHeight: 0,
    position: 'relative',
    top: theme.spacing(0.5),
  },
  icon: {
    fontSize: 16,
    lineHeight: '18px',
    marginRight: '4px',
  },
  message: {
    color: theme.palette.error.main,
    display: 'inline',
    position: 'relative',
    top: '-3px',
  },
});

const Error = (props: {
  classes: Object,
  message: String,
}) => {
  const {
    classes,
    message,
  } = props;

  return (
    <span className={classes.container}>
      <Icon name="error_outlined" color="error" className={classes.icon} />
      <Typography className={classes.message} variant="caption">{message}</Typography>
    </span>
  );
};

export default withStyles(styles)(Error);
