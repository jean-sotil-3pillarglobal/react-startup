
import { cloneDeep } from 'lodash';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import React, { Component } from 'react';

import {
  withStyles,
} from '@material-ui/core';

// provider
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
  container: props => ({
    background: ThemeBackground(props, theme, 'main'),
    borderRadius: '0 0 0 0',
    paddingTop: theme.spacing(4),
  }),
  subtitle: props => ({
    color: ThemeColor(props, theme),
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  }),
  title: props => ({
    borderColor: ThemeBackground(props, theme, 'light'),
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
  forms: [],
  valid: false,
};

class ContactFormLayout extends Component {
  constructor(props) {
    super(props);

    const {
      proxy: {
        verbiage,
      },
    } = this.props;

    // init with forms
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
    classes: Object,
    proxy: Object,
    variant: String,
  }

  handleBlur = (event) => {
    console.log(event);
  }

  handleChange = (e) => {
    const { document } = this.state;
    const cloneDocu = cloneDeep(document);
    const { target } = e;
    const { name, value } = target;

    cloneDocu[name] = value || null;

    this.setState({
      document: cloneDocu,
      valid: false,
    });
  }

  handleSubmit = (valid) => {
    const {
      document,
    } = this.state;

    return new Promise((resolve, reject) => {
      const request = {
        data: document,
        method: 'post',
        url: '',
      };

      if (valid) {
        const makeRequest = async () => {
          try {
            const result = await axios(request);

            if (result) {
              this.setState({
                valid,
              });

              resolve();
            }
          } catch (error) {
            let message = error.response
              ? error.response.data.message
              : error.message;
            message = message || 'Oops something went wrong';
            reject(message);
          }
        };

        makeRequest.call(this);
      } else {
        let message = error.response
          ? error.response.data.message
          : error.message;
        message = message || 'Oops something went wrong';
        reject(message);
      }
    });
  }

  render () {
    const {
      classes,
      proxy,
      variant,
    } = this.props;

    const {
      verbiage,
    } = proxy;

    const {
      document,
      forms,
      valid,
    } = this.state;

    return (
      verbiage &&
      <Fade left>
        <Stepper
          className={classes.container}
          copy={copy}
          document={document}
          forms={forms}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          proxy={proxy}
          variant={variant}
          valid={valid}
        />
      </Fade>
    );
  }
}

export default withStyles(styles)(withRouter(ContactFormLayout));
