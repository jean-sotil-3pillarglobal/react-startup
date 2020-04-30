import 'react-toggle/style.css';
import React, { Fragment, useState } from 'react';

import {
  Divider,
  InputAdornment,
  Typography,
  withStyles,
} from '@material-ui/core';

import { useFormContext } from 'react-hook-form';

// components
import Icon from '../icon';

import Messages from './messages';
import Validate from './validate';

import CheckField from './inputs/check';
import DateField from './inputs/date';
import IdField from './inputs/id';
import PhoneField from './inputs/phone';
import SelectField from './inputs/select';
import TextField from './inputs/text';

const styles = () => ({});

function InputLayout (props: {
  fieldType: string,
  label: string,
  lang: string,
  multiline: Boolean,
  name: String,
  options: Array,
  placeholder: Object,
  proxy: Function,
  required: Boolean,
  rules: Array,
  type: String,
}) {
  const [focused, setFocused] = useState(false);

  const {
    fieldType,
    name,
    options,
    proxy: {
      handleBlur,
      handleChange,
      handleFocus,
      language,
      verbiage,
    },
    required,
    rules,
  } = props;

  const formatList = () => {
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
  };

  const handleInputBlur = (event) => {
    setFocused(false);

    if (handleBlur) {
      handleBlur(event);
    }
  };

  const handleInputFocus = (event) => {
    setFocused(true);

    if (handleFocus) {
      handleFocus(event);
    }
  };

  const handleInputRegister = () => {
    const obj = {
      validate: {},
    };

    if (rules) {
      rules.forEach((rule) => {
        obj.validate[rule.type] = Validate(rule, language);
      });
    }

    return obj;
  };

  const {
    errors,
  } = useFormContext();

  let placeholder = '';

  const newProps = {
    ...props,
    focused,
    id: name,
    onBlur: handleInputBlur,
    onFieldChange: handleChange,
    onFocus: handleInputFocus,
    rules: handleInputRegister(),
  };

  delete newProps.options;
  delete newProps.fieldType;

  if (language && verbiage) {
    newProps.label = newProps.lang && verbiage(newProps.lang)[language];
    placeholder = newProps.placeholder && verbiage(newProps.placeholder)[language];
    newProps.placeholder = placeholder;

    delete newProps.lang;

    if (required === false) {
      newProps.label = (
        <Fragment>
          {newProps.label}
          <Typography variant="caption" component="span">{Messages['optional'][language]}</Typography>
        </Fragment>
      );
    }
  }

  newProps.inputProps = {
    endAdornment: ((errors[name] !== undefined) && (
      <InputAdornment>
        <Icon name="error_outlined" color="error" />
      </InputAdornment>
    )) || null,
    placeholder,
  };

  const field = {
    checkbox: <CheckField {...newProps} />,
    date: <DateField format="MM/DD/YYYY" locale={language} {...newProps} />,
    datetime: <DateField format="hh:mm A" locale={language} {...newProps} />,
    divider: <Divider variant="middle" />,
    id: <IdField {...newProps} />,
    input: <TextField {...newProps} />,
    multiselect: <SelectField isMulti options={formatList(options || [])} {...newProps} />,
    phone: <PhoneField {...newProps} />,
    select: <SelectField options={formatList(options || [])} {...newProps} />,
    // textarea: <TextField multiline rows={6} {...newProps} />,
  };

  return (
    <Fragment>
      {field[fieldType]}
    </Fragment>
  );
}

export const LangInput = withStyles(styles)(InputLayout);
