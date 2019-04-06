import classnames from 'classnames';
import { Component, Fragment } from 'react';

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
    padding: '18px 0',
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
  secondary: {
    background: theme.palette.secondary.main,
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
  SECONDARY: 'secondary',
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
      lang,
      onClick,
      type,
      typeButton,
      variant,
    } = this.props;

    return (
      <Fragment>
        {lang &&
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
            <LangToggler id={lang}></LangToggler>
          </Button>
        }
      </Fragment>
    );
  }
}

export const LangButton = withStyles(styles)(LayoutButton);
