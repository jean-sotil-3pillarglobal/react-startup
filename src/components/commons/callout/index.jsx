
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
    border: `0 solid ${ThemeBackground(props, theme, 'light')}`,
    borderRadius: '0 0 0 0',
    margin: theme.spacing(3),
    overflow: 'visible',
  }),
  container: {
    padding: theme.spacing(3),
  },
  subtitle: props => ({
    color: ThemeColor(props, theme),
    marginBottom: theme.spacing(4),
    width: '100%',
  }),
  title: props => ({
    color: ThemeColor(props, theme),
    marginBottom: theme.spacing(2),
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
        <Fade>
          <Typography variant="h1" component="p" className={classes.title}>
            <LangToggler id={title} />
          </Typography>
        </Fade>
        <Typography variant="body1" component="p" className={classes.subtitle}>
          <LangToggler id={subtitle} />
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Callout);
