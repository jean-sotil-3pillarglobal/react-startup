import classnames from 'classnames';
import React, { Fragment } from 'react';

import {
  Button,
  Fab,
  Link,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from '../../../providers/lang/toggler';
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

const styles = theme => ({
  button: props => ({
    '&:hover': {
      background: ThemeBackground(props, theme, 'dark'),
      borderColor: ThemeBackground(props, theme, 'light'),
    },
    background: ThemeBackground(props, theme),
    border: `2px solid ${ThemeBackground(props, theme, 'dark')}`,
    borderRadius: '0 0 0 0',
    boxShadow: 'none',
    color: ThemeColor(props, theme),
    fontSize: '1.25rem',
    fontWeight: 500,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  }),
  fab: props => ({
    '&:hover': {
      background: ThemeBackground(props, theme, 'dark'),
    },
    background: ThemeBackground(props, theme),
    border: `2px solid ${ThemeColor(props, theme)}`,
    boxShadow: 'initial',
    color: ThemeColor(props, theme),
  }),
  link: props => ({
    '&:active': {
      boxShadow: 'none',
    },
    '&:hover span': {
      textDecoration: 'underline',
    },
    background: theme.palette.background.transparent,
    borderWidth: 0,
    color: ThemeColor(props, theme),
    cursor: 'pointer',
    fontWeight: 500,
    padding: `0 ${theme.spacing(2)}px`,
    textTransform: 'none',
  }),
});

export const TYPES = {
  CONTAINED: 'contained',
  FAB: 'extended',
  LINK: 'link',
  OUTLINED: 'outlined',
  RAISED: 'raised',
};

function LayoutButton (props: {
  children: Object,
  classes: Object,
  className: Object,
  disabled: Boolean,
  href: string,
  lang: Object,
  onClick: Function,
  pos: string,
  type: string,
  typeButton: string,
}) {
  const {
    classes,
    className,
    disabled,
    href,
    lang,
    onClick,
    type,
    typeButton,
  } = props;

  const pos = props.pos || 'right';
  let btn;

  if (typeButton === TYPES.FAB) {
    btn = (
      <Fab
        className={classnames(
          classes.fab,
          className,
        )}
        href={href}
        target="_blank"
        onClick={onClick}
        variant={TYPES.FAB}>
        {props.children}
      </Fab>
    );
  } else if (typeButton === TYPES.LINK) {
    btn = (
      <Link
        href={href}
        className={classnames(
          classes.link,
          className,
        )}
        onClick={onClick}>
        {props.children}
        <LangToggler id={lang} />
      </Link>
    );
  } else {
    btn = (
      <Fragment>
        {lang &&
          <Button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={classnames(
              classes.button,
              className,
            )}
            startIcon={(pos === 'left' && props.children) || null}
            endIcon={(pos === 'right' && props.children) || null}
          >
            <LangToggler id={lang} />
          </Button>
        }
      </Fragment>
    );
  }

  return btn;
}

export const LangButton = withStyles(styles)(LayoutButton);
