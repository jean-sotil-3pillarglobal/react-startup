
import { withRouter } from 'react-router-dom';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

import {
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../../providers/lang/toggler';
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

// components
import Stepper from './../../../commons/stepper';

const styles = theme => ({
  callout: props => ({
    backgroundColor: ThemeBackground(props, theme),
    bottom: theme.spacing(4),
    position: 'relative',
    zIndex: 1,
  }),
  subtitle: props => ({
    color: ThemeColor(props, theme),
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  }),
  title: props => ({
    color: ThemeColor(props, theme),
    marginBottom: theme.spacing(4),
    textAlign: 'justify',
    textTransform: 'capitalize',
  }),
});

const NODE = 'commons';
const SLOT = 'contact_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'back',
  'forms',
  'services',
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
    <Fragment>
      <Fade left>
        <Typography variant="body2" component="p" className={classes.title}>
          <LangToggler id={copy.title} />
        </Typography>
      </Fade>
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
    </Fragment>
  );
}

export default withStyles(styles)(withRouter(ContactFormLayout));
