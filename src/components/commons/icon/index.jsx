import React from 'react';
import classnames from 'classnames';
import {
  Icon,
  withStyles,
} from '@material-ui/core';

import SVGComponent from '../svg';

const styles = theme => ({
  root: props => ({
    color: (props.color === 'error') ?
      theme.palette.error.main :
      ((props.color === 'success') ? (theme.palette.success.main) : (props.color || theme.palette.primary.main)),
  }),
  svg: {
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
    <SVGComponent src={image} className={classes.svg} />
  );


  return icon;
}

export default withStyles(styles)(IconLayout);
