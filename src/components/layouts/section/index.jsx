
import React from 'react';
import classnames from 'classnames';
import Bounce from 'react-reveal/Bounce';

import {
  Grid,
  Paper,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
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
    <Bounce left>
      <Paper
        elevation={0}
        className={classes[variant]}>
        <Grid
          container
          direction="row"
          justify={!align ? 'center' : align}
          alignItems="center"
          className={classnames(className, classes.container)}>
          <Grid
            item
            sm={12}
            md={11}
            lg={10}
            className={classes.item}>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </Bounce>
  );
}

export default withStyles(styles)(SectionBlock);
