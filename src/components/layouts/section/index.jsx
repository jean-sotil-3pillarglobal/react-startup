
import React from 'react';
import classnames from 'classnames';

import {
  Grid,
  Paper,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 4}px`,
  },
  dark: {
    '& *': {
      color: theme.palette.dark.contrastText,
    },
    backgroundColor: theme.palette.dark.main,
  },
  item: {
    backgroundColor: theme.palette.background.transparent,
  },
  light: {
    '& *': {
      color: theme.palette.secondary.contrastText,
    },
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    backgroundColor: theme.palette.background.transparent,
  },
  secondary: {
    '& *': {
      color: theme.palette.secondary.contrastText,
    },
    backgroundColor: theme.palette.secondary.main,
  },
});

function SectionBlock (props: {
  children: Object,
  classes: Object,
  className: Object,
  variant: string,
}) {
  const {
    children,
    classes,
    className,
    variant,
  } = props;

  return (
    <Paper
      className={classes[variant]}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classnames(className, classes.container)}>
        <Grid
          item
          sm={11}
          md={9}
          lg={7}
          className={classes.item}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(SectionBlock);
