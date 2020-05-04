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

import Icon from './../icon';

const styles = theme => ({
  button: props => ({
    '&:hover': {
      background: ThemeBackground(props, theme, 'light'),
      borderColor: ThemeColor(props, theme),
    },
    '&:hover *': {
      color: ThemeColor(props, theme),
    },
    background: ThemeBackground(props, theme, 'main'),
    borderColor: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    opacity: props.disabled ? 0.3 : 1,
  }),
  fab: () => ({
    '&:hover *': {
      background: 'transparent',
    },
    background: 'transparent',
    color: 'transparent',
  }),
  icon: props => ({
    color: ThemeColor(props, theme),
  }),
  link: props => ({
    '&:active': {
      boxShadow: 'none',
    },
    '&:hover span': {
      borderColor: ThemeColor(props, theme),
    },
    background: theme.palette.background.transparent,
    color: ThemeColor(props, theme),
    cursor: 'pointer',
    padding: `0 ${theme.spacing(2)}px`,
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
  onMouseLeave: Function,
  onMouseOver: Function,
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
    onMouseLeave,
    onMouseOver,
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
        onMouseLeave={onMouseLeave}
        onMouseOver={onMouseOver}
        variant="round">
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
        component="button"
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        onMouseOver={onMouseOver}
      >
        {props.children}
        {lang && <LangToggler id={lang} />}
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
            size="medium"
            startIcon={(pos === 'left' && props.children) || null}
            endIcon={(pos === 'right' && props.children) || null}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
          >
            {pos === 'right' && (
              <Fragment>
                <LangToggler id={lang} />
                {!props.children && <Icon className={classes.icon} name="keyboard_arrow_right" />}
              </Fragment>
            )}
            {pos === 'left' && (
              <Fragment>
                {!props.children && <Icon className={classes.icon} name="keyboard_arrow_left" />}
                <LangToggler id={lang} />
              </Fragment>
            )}
          </Button>
        }
      </Fragment>
    );
  }

  return btn;
}

export const LangButton = withStyles(styles)(LayoutButton);
