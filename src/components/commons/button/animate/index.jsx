import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-up';

import { LangButton, TYPES } from '../../button';
import IconAnimate from '../../icon/animate';

import {
  Button,
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  button: {},
  icon: {},
});

function LangButtonAnimate (props: {
  classes: Object,
  color: String,
  iconClassName: Object,
  iconx: String,
  icony: String,
  label: String,
  size: Number,
}) {
  const {
    classes,
    color,
    iconClassName,
    iconx,
    icony,
    label,
    size,
    ...rest
  } = props;

  const [focused, setFocused] = useState(false);

  const handleMouseOver = () => {
    setFocused(true);
  };

  const handleMouseLeave = () => {
    setFocused(false);
  };

  return (
    <LangButton
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...rest}>
      <IconAnimate
        className={iconClassName}
        color={color}
        focused={focused}
        iconx={iconx}
        icony={icony}
        size={size || 10}
      />
    </LangButton>
  );
}

export default withStyles(styles)(LangButtonAnimate);
