import classnames from 'classnames';
import React, { Fragment } from 'react';

import {
  Button,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from '../../../providers/lang/toggler';

const styles = theme => ({
  button: {
    '&:hover': {
      boxShadow: `0 0 3px ${theme.palette.utils.lighter}`,
    },
    border: `2px solid ${theme.palette.utils.darker}`,
    borderRadius: '0 0 0 0',
    boxShadow: 'none',
    display: 'inline-block',
    fontSize: '1.25rem',
    fontWeight: 500,
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px`,
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
      boxShadow: 'initial',
    },
    '&:hover span': {
      textDecoration: 'underline',
    },
    background: theme.palette.background.transparent,
    borderWidth: 0,
    color: theme.palette.primary.contrastText,
    fontWeight: 400,
    padding: '0 0 0 0',
    textTransform: 'none',
  },
  medium: {
    paddingLeft: '22px',
    paddingRight: '22px',
  },
  primary: {
    '&:active': {
      background: `${theme.palette.secondary.dark}!important`,
      color: theme.palette.secondary.contrastText,
    },
    '&:hover': {
      '& span': {
        color: `${theme.palette.secondary.contrastText}!important`,
      },
      background: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.dark,
    },
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  secondary: {
    '&:active': {
      background: `${theme.palette.primary.dark}!important`,
      color: theme.palette.primary.contrastText,
    },
    '&:hover': {
      '& span': {
        color: `${theme.palette.primary.contrastText}!important`,
      },
      background: theme.palette.primary.main,
    },
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  small: {
    paddingLeft: '16px',
    paddingRight: '16px',
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

function LayoutButton (props: {
  buttonSize: string,
  children: Object,
  classes: Object,
  className: Object,
  disabled: Boolean,
  lang: Object,
  onClick: Function,
  pos: string,
  type: string,
  typeButton: string,
  variant: string,
}) {
  const {
    buttonSize,
    classes,
    className,
    disabled,
    lang,
    onClick,
    type,
    typeButton,
    variant,
  } = props;

  const pos = props.pos || 'right';

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
            classes[buttonSize || SIZES.MEDIUM],
            classes[typeButton || TYPES.PRIMARY],
            className,
          )}>
          {pos === 'left' &&
            <Fragment>
              {props.children}
            </Fragment>
          }
          <LangToggler id={lang} />
          {pos === 'right' &&
            <Fragment>
              {props.children}
            </Fragment>
          }
        </Button>
      }
    </Fragment>
  );
}

export const LangButton = withStyles(styles)(LayoutButton);
