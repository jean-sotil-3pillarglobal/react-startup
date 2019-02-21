import classnames from 'classnames';
import { Component } from 'react';

import {
  Button,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from '../../../providers/lang/toggler';

const styles = theme => ({
  button: {
    '&:hover': {
      fontWeight: 'bold',
    },
    borderRadius: '0 0 0 0',
    boxShadow: 'none',
    display: 'inline-block',
    margin: '0 auto',
    padding: '14px 0',
    whiteSpace: 'nowrap',
  },
  danger: {
    background: theme.palette.background.main,
  },
  large: {
    paddingLeft: '36px',
    paddingRight: '36px',
  },
  link: {
    '&:active': {
      boxShadow: 'none',
    },
    '&:hover': {
      background: theme.palette.background.transparent,
      textDecoration: 'underline',
    },
    background: theme.palette.background.transparent,
    paddingBottom: '11px',
  },
  medium: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  primary: {
    background: theme.palette.background.main,
  },
  small: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  success: {
    background: theme.palette.background.main,
  },
  warning: {
    background: theme.palette.background.main,
  },
});

export const TYPES = {
  DANGER: 'danger',
  LINK: 'link',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

export const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

export const VARIANTS = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
  RAISED: 'raised',
};

class LayoutButton extends Component {
  render() {
    const {
      buttonSize,
      classes,
      disabled,
      langId,
      onClick,
      type,
      typeButton,
      variant,
    } = this.props;
    return (
      <Button
        type={type}
        disabled={disabled}
        onClick={onClick}
        variant={variant || VARIANTS.CONTAINED}
        className={classnames(
          classes.button,
          classes[typeButton || TYPES.PRIMARY],
          classes[buttonSize || SIZES.MEDIUM],
        )}>
        <LangToggler id={langId}></LangToggler>
      </Button>
    );
  }
}

export const BaseButton = (withStyles(styles)(LayoutButton));
