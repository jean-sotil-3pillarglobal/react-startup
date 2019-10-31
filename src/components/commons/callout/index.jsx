
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
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

const styles = theme => ({
  card: props => ({
    background: ThemeBackground(props, theme),
    border: `3px solid ${ThemeColor(props, theme)}`,
    overflow: 'visible',
  }),
  container: {
    padding: '3.75rem 2.875rem 3.75rem 2.875rem!important',
  },
  subtitle: props => ({
    color: ThemeColor(props, theme),
    fontWeight: 300,
    marginBottom: theme.spacing(2),
  }),
  title: props => ({
    color: ThemeColor(props, theme),
    fontSize: '2.3rem',
    fontWeight: 400,
    lineHeight: '1.2em',
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
    textTransform: 'capitalize',
  }),
});

function Callout (props: {
  children: Object,
  classes: Object,
  className: Object,
  subtitle: Object,
  title: Object,
}) {
  const {
    children,
    classes,
    className,
    subtitle,
    title,
  } = props;

  return (
    <Card className={classnames(classes.card, className)} elevation={0}>
      <CardContent className={classes.container}>
        <Fade left>
          <Typography variant="body2" component="p" className={classes.title}>
            <LangToggler id={title} />
          </Typography>
        </Fade>
        <Typography variant="body2" component="p" className={classes.subtitle}>
          <LangToggler id={subtitle} />
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Callout);
