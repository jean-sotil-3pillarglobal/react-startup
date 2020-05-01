
import React from 'react';
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';
import {
  Grid,
  Paper,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    margin: '0 auto',
    maxWidth: 1200,
    minHeight: '100vh',
    overflow: 'hidden',
    padding: `${theme.spacing(16)}px 0`,
  },
  dark: {
    backgroundColor: theme.palette.primary.dark,
  },
  dark2: {
    backgroundColor: theme.palette.secondary.dark,
  },
  light: {
    backgroundColor: theme.palette.primary.light,
  },
  light2: {
    backgroundColor: theme.palette.secondary.light,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
});

function SectionBlock (props: {
  // id: string,
  align: string,
  children: Object,
  classes: Object,
  className: Object,
  outside: Boolean,
  variant: string,
}) {
  const {
    // id,
    align,
    children,
    classes,
    className,
    outside,
    variant,
  } = props;

  return (
    <Fade>
      <Paper
        elevation={0}
        className={variant ? classes[variant] : classes.primary}
        square
      >
        {!outside && (
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
              lg={10}>
              {children}
            </Grid>
          </Grid>
        )}
        {outside && children}
      </Paper>
    </Fade>
  );
}

export default withStyles(styles)(SectionBlock);
