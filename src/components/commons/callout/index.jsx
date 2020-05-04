
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
    background: !props.transparent && ThemeBackground(props, theme),
    border: `0 solid ${ThemeBackground(props, theme, 'light')}`,
    borderRadius: '0 0 0 0',
    overflow: 'visible',
  }),
  container: {},
  subtitle: props => ({
    color: ThemeColor(props, theme),
    marginBottom: theme.spacing(3),
    width: '100%',
  }),
  title: props => ({
    color: ThemeColor(props, theme),
    marginBottom: theme.spacing(3),
    textAlign: props.align || 'left',
    textTransform: 'initial',
  }),
});

function Callout (props: {
  children: Object,
  classes: Object,
  className: Object,
  subtitle: Object,
  title: Object,
  transparent: Boolean,
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
        <Fade top>
          <Typography variant="h1" component="p" className={classes.title}>
            <LangToggler id={title} />
          </Typography>
        </Fade>
        {subtitle && (
          <Typography variant="body1" component="p" className={classes.subtitle}>
            <LangToggler id={subtitle} />
          </Typography>
        )}
        {children}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Callout);
