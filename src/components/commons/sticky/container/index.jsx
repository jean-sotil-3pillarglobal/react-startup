
import React, { Component } from 'react';
import {
  withStyles,
} from '@material-ui/core';
import classnames from 'classnames';

const styles = theme => ({
  container: {
    '& [class*="MuiPaper"]:first-child': {
      transition: theme.transitions.create(
        ['background-color'],
        { duration: theme.transitions.duration.complex },
      ),
    },
    top: 0,
    width: '100%',
  },
  root: {
    '& *': {
      color: theme.palette.background.black,
    },
    '& [class*="MuiPaper"]:first-child': {
      backgroundColor: theme.palette.background.sticky,
      borderBottom: `1px solid ${theme.palette.background.darker}`,
    },
    position: 'fixed',
    zIndex: 999,
  },
});

function StickyContent (props: {
  children: Object,
  classes: Object,
  modifiers: Object,
  limits: Object,
  child: Object,
  sticky: Boolean,
}) {
  const {
    classes,
    children,
    modifiers: { top, left },
    limits,
    child,
    sticky,
  } = props;

  let style = {};

  if (sticky && limits) {
    style = {
      left: left && limits.left,
      maxWidth: (child && child.width) || 0,
      top: top && limits.offsetTop,
    };
  }

  return (
    <div
      style={style}
      className={classnames(
        classes.container,
        sticky > 0 && classes.root,
      )}>
      {children}
    </div>
  );
}

export default withStyles(styles)(StickyContent);
