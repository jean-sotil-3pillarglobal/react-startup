
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';
import React from 'react';

import {
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  card: {
    border: '2px groove',
    overflow: 'visible',
  },
  container: {
    padding: '2.75rem 1.875rem 2.75rem 1.875rem!important',
  },
  primary: {
    background: theme.palette.primary.main,
    borderColor: theme.palette.primary.light,
  },
  primaryColor: {
    color: theme.palette.primary.contrastText,
  },
  secondary: {
    background: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.light,
  },
  secondaryColor: {
    color: theme.palette.secondary.contrastText,
  },
  subtitle: {
    marginBottom: theme.spacing.unit * 2,
  },
  title: {
    fontSize: '2.0625rem',
    fontWeight: 600,
    lineHeight: '1.2em',
    marginBottom: theme.spacing.unit * 2,
    textTransform: 'uppercase',
  },
});

function Callout (props: {
  children: Object,
  classes: Object,
  className: Object,
  subtitle: string,
  title: string,
  variant: string,
}) {
  const {
    children,
    classes,
    className,
    subtitle,
    title,
    variant,
  } = props;

  return (
    <Card className={classnames(classes.card, classes[variant || 'primary'], className)} elevation={0}>
      <CardContent className={classes.container}>
        <Fade left>
          <Typography variant="body2" component="p" className={classnames(classes.title, classes[`${variant}Color`])}>{title}</Typography>
        </Fade>
        <Typography variant="body2" component="p" className={classnames(classes.subtitle, classes[`${variant}Color`])}>{subtitle}</Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Callout);
