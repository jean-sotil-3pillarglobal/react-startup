import 'react-toggle/style.css';
import classnames from 'classnames';
import React, { Component, Fragment } from 'react';
import Toggle from 'react-toggle';

import {
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';

// components
import Icon from '../icon';

import Messages from './messages';

// masks
import MaskCredit from './mask/credit';
import MaskCurrency from './mask/currency';
import MaskCVV from './mask/cvv';
import MaskFloat from './mask/float';
import MaskPhone from './mask/phone';
import MaskZip from './mask/zipcode';

const styles = theme => ({
  marginNormal: {
    '& .react-toggle-thumb': {
      boxShadow: 'initial!important',
    },
    '&[class*="react-toggle"]': {
      boxShadow: 'initial',
      margin: `${theme.spacing(1)}px`,
    },
    '&[class*="toggle--checked"]': {
      '& .react-toggle-thumb': {
        backgroundColor: `${theme.palette.primary.main}!important`,
        borderColor: 'initial',
      },
      '& .react-toggle-track': {
        backgroundColor: `${theme.palette.primary.contrastText}!important`,
      },
    },
    outline: `2px dotted ${theme.palette.utils.highlight}`,
  },
  root: {
    '& svg[class*="uiSvgIcon"]': {
      position: 'absolute',
      right: 0,
      top: 0,
    },
    '*[class*="MuiMenuItem-selected"]': {
      backgroundColor: `${theme.palette.primary.dark}!important`,
    },
    backgroundColor: '#ffffff!important',
    border: `1px solid ${theme.palette.utils.black}`,
    boxShadow: `0 0 2px ${theme.palette.utils.black} inset`,
    padding: '2px 8px',
  },
});

class InputLayout extends Component {
  state = {
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
      fieldType,
      proxy: {
        handleBlur,
      },
    } = this.props;

    this.setState({ focused: false });

    if (handleBlur) {
      handleBlur(event, fieldType);
    }
  }

  error = () => {
    const {
      id,
      proxy: {
        errors,
        language,
      },
    } = this.props;

    return (
      errors[id].check && <Typography variant="caption" color="default">{Messages(errors[id].error, language)}</Typography>
    );
  }

  props: {
    classes: Object,
    fieldType: string,
    id: string,
    InputLabelProps: any,
    label: string,
    lang: string,
    mask: string,
    multiline: Boolean,
    onChange: Function,
    options: Array,
    placeholder: Object,
    proxy: Function,
    value: any,
  };

  render () {
    const {
      classes,
      fieldType,
      multiline,
      options,
      proxy: {
        handleChange,
        language,
        verbiage,
      },
      value,
      mask,
    } = this.props;
    const { focused } = this.state;

    const props = JSON.parse(JSON.stringify(this.props));
    delete props.options;
    delete props.fieldType;

    let label = '';
    let placeholder = '';
    const filled = value && value.length > 0;


    if (language && verbiage) {
      label = props.lang && verbiage(props.lang)[language];
      placeholder = props.placeholder && verbiage(props.placeholder)[language];

      delete props.lang;
      delete props.placeholder;

      if (props.required === false) {
        label = (
          <Fragment>
            {label}
            <Typography variant="caption" component="span">{Messages('optional', language)}</Typography>
          </Fragment>
        );
      }
    }

    const inputProps = {
      endAdornment: (
        props.error !== undefined &&
        <InputAdornment>
          {!props.error &&
            <Icon name="check" className={classnames(classes.icon)} color={value.length > 0 ? 'success' : 'default'} />
          }
          {props.error &&
            <Icon name="exclamation-triangle" className={classnames(classes.icon)} color="error" />
          }
        </InputAdornment>
      ),
      placeholder,
    };

    if (mask === 'credit') {
      inputProps.inputComponent = MaskCredit;
      inputProps.value = value;
    } else if (mask === 'currency') {
      inputProps.inputComponent = MaskCurrency;
      inputProps.value = value;
    } else if (mask === 'cvv') {
      inputProps.inputComponent = MaskCVV;
      inputProps.value = value;
    } else if (mask === 'float') {
      inputProps.inputComponent = MaskFloat;
      inputProps.value = value;
    } else if (mask === 'phone') {
      inputProps.inputComponent = MaskPhone;
      inputProps.value = value;
    } else if (mask === 'zipcode') {
      inputProps.inputComponent = MaskZip;
      inputProps.value = value;
    }

    const field = {
      checkbox: (
        <FormControl fullWidth>
          <Toggle
            defaultChecked={Boolean(value)}
            className={classes.marginNormal}
            onBlur={this.handleBlur}
            onChange={handleChange}
            {...props} />
          <Typography className="toggle" variant="caption">{label}</Typography>
        </FormControl>
      ),
      divider: <Divider variant="middle" />,
      input: (
        <FormControl fullWidth>
          <TextField
            className={classnames((focused || filled) && classes.marginNormal, props.error && 'error')}
            fullWidth
            label={label}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props} />
          {props.error && this.error()}
        </FormControl>
      ),
      multiple: (
        <FormControl fullWidth>
          <TextField
            className={classnames((focused || filled) && classes.marginNormal)}
            fullWidth
            label={label}
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
              multiple: true,
            }}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props} >
            {options && this.showOptions(options)}
          </TextField>
          {props.error && this.error()}
        </FormControl>
      ),
      phone: (
        <FormControl fullWidth>
          <TextField
            className={classnames((focused || filled) && classes.marginNormal, props.error && 'error')}
            fullWidth
            label={label}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props}
            type="text" />
          {props.error && this.error()}
        </FormControl>
      ),
      select: (
        <FormControl fullWidth>
          <TextField
            className={classnames((focused || filled) && classes.marginNormal)}
            fullWidth
            label={label}
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
            InputProps={inputProps}>
            {options && this.showOptions(options)}
          </TextField>
          {props.error && this.error()}
        </FormControl>
      ),
      textarea: (
        <FormControl fullWidth>
          <TextField
            className={classnames((focused || filled) && classes.marginNormal)}
            fullWidth
            label={label}
            multiline={multiline}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props} />
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
