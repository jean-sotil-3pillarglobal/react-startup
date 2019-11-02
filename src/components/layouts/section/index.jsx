
import React from 'react';
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';
import { Section } from 'react-scroll-section';
import {
  Grid,
  Paper,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  container: {
    margin: '0 auto',
    maxWidth: 1200,
    padding: `${theme.spacing(16)}px ${theme.spacing(4)}px`,
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
  align: string,
  children: Object,
  classes: Object,
  className: Object,
  id: string,
  variant: string,
}) {
  const {
    align,
    children,
    classes,
    className,
    id,
    variant,
  } = props;

  return (
    <Fade>
      <Paper
        elevation={0}
        className={variant ? classes[variant] : classes.primary}>
        <Section id={id || ''}>
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
        </Section>
      </Paper>
    </Fade>
  );
}

export default withStyles(styles)(SectionBlock);
