import 'react-toggle/style.css';
import React, { Component, Fragment } from 'react';
import Toggle from 'react-toggle';

import {
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  Typography,
  withStyles,
} from '@material-ui/core';

// components
import Icon from '../icon';

import Messages from './messages';
import Validate from './validate';

import TextField from './inputs/text';
import PhoneField from './inputs/phone';

const styles = () => ({});

class InputLayout extends Component {
  state = {
    error: {},
    focused: false,
  };

  showOptions (options) {
    const {
      proxy: { verbiage, language },
    } = this.props;

    return verbiage && options.map((option, i) => {
      let { label, value } = option;
      let node;

      // label as lang id, not as object (*forms)
      if (typeof label === 'string') {
        label = verbiage(label);
        value = verbiage(value);
      }

      if (value !== '') {
        const key = `${i}_select_input`;
        node = (
          <MenuItem key={key} value={value}>
            {label[language]}
          </MenuItem>
        );
      } else {
        const key = `no_${i}_value_select_input`;
        node = (
          <MenuItem key={key} value="" disabled>
            {label[language]}
          </MenuItem>
        );
      }

      return node;
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
      fieldType,
      name,
      required,
      value,
    } = this.props;

    const check = Validate(required, value, fieldType) || null;

    this.setState({
      error: check,
      focused: false,
    });

    if (handleBlur) {
      handleBlur(event, {
        [name]: check,
      });
    }
  }

  error = () => {
    const {
      proxy: {
        language,
      },
    } = this.props;

    const {
      error,
    } = this.state;

    return (error.check && Messages(error.error, language)) || '';
  }

  props: {
    classes: Object,
    fieldType: string,
    label: string,
    lang: string,
    multiline: Boolean,
    name: String,
    onChange: Function,
    options: Array,
    placeholder: Object,
    proxy: Function,
    required: Boolean,
    type: String,
    value: any,
  };

  render () {
    const {
      classes,
      fieldType,
      options,
      proxy: {
        handleChange,
        handleFocus,
        language,
        verbiage,
      },
      value,
    } = this.props;

    const {
      focused,
      error,
    } = this.state;

    let placeholder = '';

    const props = {
      ...this.props,
      error: error.check,
      errorMsg: this.error(),
      filled: value && value.length > 0,
      focused,
      onBlur: this.handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
    };

    delete props.options;
    delete props.fieldType;

    if (language && verbiage) {
      props.label = props.lang && verbiage(props.lang)[language];
      placeholder = props.placeholder && verbiage(props.placeholder)[language];

      delete props.lang;
      delete props.placeholder;

      if (props.required === false) {
        props.label = (
          <Fragment>
            {props.label}
            <Typography variant="caption" component="span">{Messages('optional', language)}</Typography>
          </Fragment>
        );
      }
    }

    props.inputProps = {
      endAdornment: (
        error.check !== undefined &&
        <InputAdornment>
          {!error.check &&
            <Icon name="check" color="success" />
          }
          {error.check &&
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
            onChange={handleChange}
            {...props} />
          <Typography className="toggle" variant="caption">{props.label}</Typography>
        </FormControl>
      ),
      divider: <Divider variant="middle" />,
      input: <TextField {...props} />,
      multiple: null,
      phone: <PhoneField {...props} />,
      select: (
        <FormControl fullWidth>
          <TextField
            fullWidth
            label={props.label}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            select
            SelectProps={{
              displayEmpty: true,
              MenuProps: {
                anchorOrigin: {
                  horizontal: 'left',
                  vertical: 'bottom',
                },
                getContentAnchorEl: null,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            {...props}
            InputProps={props.inputProps}>
            {options && this.showOptions(options)}
          </TextField>
          {props.error && this.error()}
        </FormControl>
      ),
    };

    return (
      <Fragment>
        {field[fieldType]}
      </Fragment>
    );
  }
}

export const LangInput = withStyles(styles)(InputLayout);
