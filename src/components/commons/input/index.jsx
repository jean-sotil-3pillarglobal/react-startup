import 'react-toggle/style.css';
import React, { Component, Fragment } from 'react';
import Toggle from 'react-toggle';

import {
  Divider,
  FormControl,
  InputAdornment,
  Typography,
  withStyles,
} from '@material-ui/core';

// components
import Icon from '../icon';

import Messages from './messages';
import Validate from './validate';

import PhoneField from './inputs/phone';
import SelectField from './inputs/select';
import TextField from './inputs/text';

const styles = () => ({});

class InputLayout extends Component {
  state = {
    focused: false,
  };

  formatList (options) {
    const {
      proxy: { verbiage, language },
    } = this.props;

    return verbiage && verbiage(options).map((option) => {
      let { label, value } = option;

      // label as lang id, not as object (*forms)
      if (typeof label === 'string') {
        label = verbiage(label)[language];
        value = verbiage(value);
      }

      if (typeof label === 'object') {
        label = label[language];
      }

      return {
        label,
        value,
      };
    });
  }

  handleFocus = () => {
    this.setState({
      focused: true,
    });
  }

  handleBlur = (event) => {
    const {
      proxy: {
        handleBlur,
      },
    } = this.props;

    this.setState({
      focused: false,
    });

    if (handleBlur) {
      handleBlur(event);
    }
  }

  handleRegister = () => {
    const {
      proxy: {
        language,
      },
      rules,
    } = this.props;

    const obj = {
      validate: {},
    };

    if (rules) {
      rules.forEach((rule) => {
        obj.validate[rule.type] = Validate(rule, language);
      });
    }

    return obj;
  }

  props: {
    classes: Object,
    fieldType: string,
    formProps: Object,
    label: string,
    lang: string,
    multiline: Boolean,
    name: String,
    onChange: Function,
    options: Array,
    placeholder: Object,
    proxy: Function,
    required: Boolean,
    rules: Array,
    type: String,
    value: any,
  };

  render () {
    const {
      classes,
      fieldType,
      formProps,
      name,
      options,
      proxy: {
        handleChange,
        handleFocus,
        language,
        verbiage,
      },
      required,
      value,
    } = this.props;

    const {
      focused,
    } = this.state;

    const {
      errors,
    } = formProps;

    let placeholder = '';

    const props = {
      ...this.props,
      filled: value && value.length > 0,
      focused,
      formProps,
      inputRef: this.handleRegister(),
      onBlur: this.handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
      value,
    };

    delete props.options;
    delete props.fieldType;

    if (language && verbiage) {
      props.label = props.lang && verbiage(props.lang)[language];
      placeholder = props.placeholder && verbiage(props.placeholder)[language];
      props.placeholder = placeholder;

      delete props.lang;

      if (required === false) {
        props.label = (
          <Fragment>
            {props.label}
            <Typography variant="caption" component="span">{Messages['optional'][language]}</Typography>
          </Fragment>
        );
      }
    }

    props.inputProps = {
      endAdornment: (
        <InputAdornment>
          {(errors[name] !== undefined) &&
            <Icon name="error" color="error" />
          }
        </InputAdornment>
      ),
      placeholder,
    };

    const field = {
      checkbox: (
        <FormControl fullWidth>
          <Toggle
            defaultChecked={Boolean(value)}
            className={classes.marginNormal}
            onBlur={this.handleBlur}
            onChange={handleChange} />
          <Typography className="toggle" variant="caption">{props.label}</Typography>
        </FormControl>
      ),
      divider: <Divider variant="middle" />,
      input: <TextField {...props} />,
      multiselect: <SelectField isMulti options={this.formatList(options || [])} {...props} />,
      phone: <PhoneField {...props} />,
      select: <SelectField options={this.formatList(options || [])} {...props} />,
      textarea: <TextField multiline rows={6} {...props} />,
    };

    return (
      <Fragment>
        {field[fieldType]}
      </Fragment>
    );
  }
}

export const LangInput = withStyles(styles)(InputLayout);
