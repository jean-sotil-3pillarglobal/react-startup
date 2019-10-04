import React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import classnames from 'classnames';

import {
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  '@keyframes heartbeat': {
    '0%': {
      fill: theme.palette.primary.light,
      opacity: 0.8,
      strokeWidth: 0,
    },
    '50%': {
      opacity: 0.5,
      stroke: theme.palette.primary.dark,
      strokeOpacity: 0.6,
      strokeWidth: 1,
    },
    '100%': {
      opacity: 1,
      strokeWidth: 0,
    },
  },
  root: {
    '& [data-color="svg-blink"]': {
      animationDuration: '3s',
      animationIterationCount: 1,
      animationName: 'heartbeat',
      animationTimingFunction: 'ease-in',
      strokeLinecap: 'round',
      transition: theme.transitions.create(
        ['transform'],
        { duration: theme.transitions.duration.complex },
      ),
    },
    '& [data-color="svg-primary"]': {
      fill: theme.palette.primary.dark,
    },
    '& [data-color="svg-secondary"]': {
      fill: theme.palette.secondary.dark,
    },
    '& circle[data-color="svg-blink"]': {
      transform: 'scale(1, 1)',
    },
  },
});

function SVG (props: {
  classes: Object,
  className: Object,
  src: Object,
  color: string,
}) {
  const {
    classes,
    className,
    color,
    src,
  } = props;

  return (
    <SvgLoader path={src} className={classnames(classes.root, className)}>
      <SvgProxy selector="[fill*='#6c63ff']" data-color={`svg-${color || 'primary'}`} />
      <SvgProxy selector="[fill*='#f2f2f2']" data-color="svg-blink" />
    </SvgLoader>
  );
}

export default withStyles(styles)(SVG);
