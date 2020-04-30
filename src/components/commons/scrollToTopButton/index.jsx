import React from 'react';
import ScrollToTop from 'react-scroll-up';

import { TYPES } from '../button/';
import LangButtonAnimate from '../button/animate';

import {
  Button,
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  icon: {
    display: 'block',
    // rotate
  },
});

function scrollToTopButton (props: {
  classes: Object,
  label: String,
}) {
  const {
    classes,
    label,
  } = props;

  return (
    <ScrollToTop style={{
      bottom: 200,
      right: 0,
    }} showUnder={1000} duration={1000}>
      <LangButtonAnimate
        color="black"
        iconClassName={classes.icon}
        iconx="arrowUp"
        icony="home"
        lang={label}
        size={30}
        typeButton={TYPES.LINK}
        variant="primary"
      />
    </ScrollToTop>
  );
}

export default withStyles(styles)(scrollToTopButton);
