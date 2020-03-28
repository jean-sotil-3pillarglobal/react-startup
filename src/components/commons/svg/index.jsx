import React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import classnames from 'classnames';

import {
  withStyles,
} from '@material-ui/core';

import ThemeBackground from './../../../providers/utils/theme.background';

const styles = theme => ({
  '@keyframes heartbeat': props => ({
    '0%': {
      fill: ThemeBackground(props, theme, 'light'),
      opacity: 0.8,
      strokeWidth: 0,
    },
    '50%': {
      fill: ThemeBackground(props, theme, 'dark'),
      opacity: 0.5,
      strokeOpacity: 0.6,
      strokeWidth: 1,
    },
    '100%': {
      opacity: 1,
      strokeWidth: 0,
    },
  }),
  root: props => ({
    '& *': {
      animationDuration: '5s',
      animationIterationCount: 2,
      animationTimingFunction: 'ease-in',
      transition: theme.transitions.create(
        ['fill'],
        { duration: theme.transitions.duration.complex },
      ),
    },
    '& [data-color="svg-primary"]': {
      fill: ThemeBackground(props, theme, 'main'),
    },
    '& [data-color="svg-secondary"]': {
      fill: ThemeBackground(props, theme, 'light'),
    },
    '& [data-color="svg-thrid"]': {
      fill: ThemeBackground(props, theme, 'dark'),
    },
  }),
});

const SVGLayout = (props: {
  classes: Object,
  className: Object,
  src: String,
}) => {
  const {
    classes,
    className,
    src,
  } = props;

  return (
    <SvgLoader path={src} className={classnames(classes.root, className)}>
      <SvgProxy selector="[fill*='#6c63ff']" data-color="svg-primary" />
      <SvgProxy selector="[fill*='#f2f2f2']" data-color="svg-secondary" />
      <SvgProxy selector="[fill*='#2f2e41']" data-color="svg-thrid" />
      <SvgProxy selector="[fill*='#3f3d56']" data-color="svg-thrid" />
      <SvgProxy selector="[fill*='#575a89']" data-color="svg-secondary" />
      <SvgProxy selector="[fill*='#ff6584']" data-color="svg-secondary" />
      <SvgProxy selector="[fill*='#575a88']" data-color="svg-thrid" />
    </SvgLoader>
  );
};

export default withStyles(styles)(SVGLayout);
