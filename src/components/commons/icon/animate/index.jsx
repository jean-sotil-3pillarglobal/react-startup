// @flow

import React, { Fragment } from 'react';

import {
  MorphIcon,
} from 'react-svg-buttons';

import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({});

function IconAnimate (props: {
  className: string,
  focused: Boolean,
  onClick: Function,
  iconx: string,
  icony: string,
}) {
  const { onClick, className, ...rest } = props;
  const { iconx, icony, focused } = props;

  return (
    <Fragment>
      <MorphIcon className={className} thickness={2} type={focused ? iconx : icony } onClick={onClick} {...rest} />
    </Fragment>
  );
}

export default withStyles(styles)(IconAnimate);
