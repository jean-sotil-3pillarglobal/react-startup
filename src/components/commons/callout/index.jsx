
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';
import React from 'react';

import {
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';

import LangToggler from './../../../providers/lang/toggler';

const styles = theme => ({
  card: {
    border: '2px groove',
    overflow: 'visible',
  },
  container: {
    padding: '3.75rem 2.875rem 3.75rem 2.875rem!important',
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
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: '2.3rem',
    fontWeight: 600,
    lineHeight: '1.2em',
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
    textTransform: 'capitalize',
  },
});

function Callout (props: {
  children: Object,
  classes: Object,
  className: Object,
  subtitle: Object,
  title: Object,
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
          <Typography variant="body2" component="p" className={classnames(classes.title, classes[`${variant}Color`])}>
            <LangToggler id={title} />
          </Typography>
        </Fade>
        <Typography variant="body2" component="p" className={classnames(classes.subtitle, classes[`${variant}Color`])}>
          <LangToggler id={subtitle} />
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Callout);
