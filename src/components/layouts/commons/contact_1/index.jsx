
import { Section } from 'react-scroll-section';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import React from 'react';

import {
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../../providers/lang/toggler';
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
  'categories',
  'forms',
  'id',
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
    variant,
  } = props;

  const {
    verbiage,
  } = proxy;

  return (
    verbiage &&
    <Section id={verbiage(copy.id)}>
      <Fade left>
        <Typography variant="body2" component="p" className={classes.title}>
          <LangToggler id={copy.title} />
        </Typography>
      </Fade>
      <Stepper
        copy={copy}
        document={document}
        forms={verbiage(copy.forms)}
        onBlur={onBlur}
        onChange={onChange}
        onSubmit={onSubmit}
        proxy={proxy}
        variant={variant}
      />
    </Section>
  );
}

export default withStyles(styles)(withRouter(ContactFormLayout));
