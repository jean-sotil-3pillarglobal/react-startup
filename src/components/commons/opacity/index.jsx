// flow

import React from 'react';

import {
  withStyles,
} from '@material-ui/core';

import ThemeBackground from './../../../providers/utils/theme.background';

const styles = theme => ({
  opacity: props => ({
    background: !props.backgroundImage ? ThemeBackground(props, theme, 'light') : `url(${props.backgroundImage})`,
    content: '',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: props.opacity || 0.4,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: props.zIndex || -1,
  }),
});

function OpacityComponent (props: {
classes: object,
}) {
  const {
    classes,
  } = props;

  return (
    <span className={classes.opacity} />
  );
}

export default withStyles(styles)(OpacityComponent);
