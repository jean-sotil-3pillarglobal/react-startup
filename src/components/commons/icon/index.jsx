import React from 'react';
import classnames from 'classnames';
import {
  Icon,
  withStyles,
} from '@material-ui/core';

import SVGComponent from '../svg';

import ThemeBackground from '../../../providers/utils/theme.background';

const styles = theme => ({
  root: props => ({
    color: (props.variant && ThemeBackground(props, theme, 'dark')) || props.color || theme.palette.primary.main,
  }),
  svg: {
    height: 'initial',
    width: '20px',
  },
});

function IconLayout (props: {
  classes: Object,
  className: Object,
  name: Object,
  image: Object,
}) {
  const {
    classes,
    className,
    image,
    name,
  } = props;

  const icon = !image ? (
    <Icon className={classnames(classes.root, className)}>
      {name}
    </Icon>
  ) : (
    <SVGComponent src={image} className={classnames(classes.svg, className)} />
  );


  return icon;
}

export default withStyles(styles)(IconLayout);
