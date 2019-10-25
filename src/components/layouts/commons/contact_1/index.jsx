
import { withRouter } from 'react-router-dom';
import React from 'react';

import {
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import ThemeBackground from './../../../../providers/utils/theme.background';
// import ThemeColor from './../../../../providers/utils/theme.color';

// components
import Callout from './../../../commons/callout/';
import Stepper from './../../../commons/stepper';

const styles = theme => ({
  callout: props => ({
    backgroundColor: ThemeBackground(props, theme),
    bottom: theme.spacing(4),
    position: 'relative',
    zIndex: 1,
  }),
});

const NODE = 'commons';
const SLOT = 'contact_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'back',
  'forms',
  'services',
  'subtitle',
  'title',
]);

function ContactFormLayout (props: {
  classes: Object,
  proxy: Object,
  variant: String,
  onChange: Function,
}) {
  const {
    classes,
    document,
    onBlur,
    onChange,
    onSubmit,
    proxy,
    service,
    variant,
  } = props;

  const {
    verbiage,
  } = proxy;

  return (
    verbiage &&
    <Callout
      className={classes.callout}
      subtitle={copy.subtitle}
      title={copy.title}
      variant={variant || 'primary'}
    >
      <Stepper
        copy={copy}
        document={document}
        onBlur={onBlur}
        onChange={onChange}
        onSubmit={onSubmit}
        proxy={proxy}
        service={service}
        variant={variant}
      />
    </Callout>
  );
}

export default withStyles(styles)(withRouter(ContactFormLayout));
