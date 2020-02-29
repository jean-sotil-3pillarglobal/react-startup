
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import React, { Component } from 'react';
import { cloneDeep } from 'lodash';

import {
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
// import LangToggler from './../../../../providers/lang/toggler';
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

const init = {
  document: {},
  errors: {},
  forms: [],
};

class ContactFormLayout extends Component {
  constructor(props) {
    super(props);
    const {
      proxy: {
        verbiage,
      },
    } = this.props;

    init.forms = verbiage(copy.forms).map((form) => {
      const cloneForm = form;

      cloneForm.rows = form.rows && form.rows.map((row) => {
        const cloneRow = row;

        cloneRow.fields = cloneRow.fields.map((f) => {
          const cloneField = f;
          // add services
          if (f.key.includes('services')) {
            cloneField.options = copy.services;
          }

          return cloneField;
        });

        return cloneRow;
      });

      return cloneForm;
    });

    this.state = init;
  }

  props: {
    // classes: Object,
    proxy: Object,
    variant: String,
  }

  handleBlur = (event, error) => {
    const { errors } = this.state;

    this.setState({
      ...this.state,
      errors: {
        ...errors,
        ...error,
      },
    });
  }

  handleChange = (event) => {
    const { document } = this.state;
    const cloneDocu = cloneDeep(document);

    const {
      target: {
        value,
        name,
      },
    } = event;

    cloneDocu[name] = value;

    this.setState({
      ...this.state,
      document: cloneDocu,
    });
  }

  handleSubmit = () => {}

  render () {
    const {
      proxy,
      variant,
    } = this.props;

    const {
      verbiage,
    } = proxy;

    const {
      document,
      forms,
    } = this.state;

    return (
      verbiage &&
      <Fade left>
        <Stepper
          copy={copy}
          document={document}
          forms={forms}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          proxy={proxy}
          variant={variant}
        />
      </Fade>
    );
  }
}

export default withStyles(styles)(withRouter(ContactFormLayout));
