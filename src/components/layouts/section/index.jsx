
import React from 'react';
import classnames from 'classnames';

import {
  Grid,
  Paper,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 4}px`,
  },
  dark: {
    backgroundColor: theme.palette.dark.main,
  },
  item: {
    backgroundColor: theme.palette.background.transparent,
  },
  light: {
    backgroundColor: theme.palette.primary.light,
  },
  root: {
    backgroundColor: theme.palette.background.transparent,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.dark,
  },
});

function SectionBlock (props: {
  align: string,
  children: Object,
  classes: Object,
  className: Object,
  variant: string,
}) {
  const {
    align,
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
        justify={!align ? 'center' : align}
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
