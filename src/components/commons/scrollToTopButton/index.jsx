import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { useTheme } from '@material-ui/core/styles';

import { TYPES } from '../button/';
import LangButtonAnimate from '../button/animate';

import {
  Button,
  withStyles,
} from '@material-ui/core';

const styles = (theme) => ({
  icon: {
    display: 'block',
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

  const theme = useTheme();

  return (
    <ScrollToTop style={{
      bottom: 30,
      right: 20,
    }} showUnder={1000} duration={1000}>
      <LangButtonAnimate
        color={theme.palette.primary.dark}
        iconClassName={classes.icon}
        iconx="arrowUp"
        icony="home"
        size={40}
        typeButton={TYPES.LINK}
        variant="primary"
      />
    </ScrollToTop>
  );
}

export default withStyles(styles)(scrollToTopButton);
