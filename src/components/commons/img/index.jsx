import React from 'react';
import classnames from 'classnames';

import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  img: {
    width: '100%',
  },
});

function SmartImg (props: {
  alt: string,
  classes: Object,
  className: Object,
  proxy: Object,
  src: string,
}) {
  const {
    alt,
    classes,
    className,
    proxy,
    src,
  } = props;

  const {
    device,
    language,
  } = proxy;

  return (
    <img
      className={classnames(classes.img, className)}
      src={src[device]}
      alt={alt && alt[language]} />
  );
}

export default withStyles(styles)(SmartImg);
