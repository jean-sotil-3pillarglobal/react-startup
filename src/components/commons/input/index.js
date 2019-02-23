// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControl, TextField, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// action creators
import {
  selectVariantVerbiageAction,
} from '../../../store/actions/components/footer';

const ITEM_HEIGHT = '16px';

const styles = theme => ({
  marginDense: {
    margin: `${theme.spacing.unit}px 0`,
  },
  root: {
    '& li': {
      height: `${ITEM_HEIGHT}px`,
      paddingLeft: '15px',
    },
    maxHeight: ITEM_HEIGHT * 10,
    padding: 0,
  },
});

class BaseInput extends Component {
  state = {};

  props: {
    classes: Object,
    fieldType: string,
    id: string,
    InputLabelProps: any,
    label: string,
    langid: string,
    language: string,
    multiline: Boolean,
    onChange: Function,
    options: Array,
    value: any,
    verbiage: Function,
  };

  render() {
    const {
      classes,
      fieldType,
      id,
      InputLabelProps,
      langid,
      language,
      multiline,
      onChange,
      options,
      value,
      verbiage,
    } = this.props;

    const props = JSON.parse(JSON.stringify(this.props));
    const langLabel = verbiage(langid)[language] || '';
    delete props.fieldType;
    delete props.options;
    delete props.value;
    delete props.InputLabelProps;


    const field = {
      input: (
        <FormControl fullWidth>
          <TextField
            label={langLabel}
            className={classes.marginDense}
            InputLabelProps={InputLabelProps}
            onChange={onChange}
            value={value}
            {...props}
          />
        </FormControl>
      ),
      multiple: (
        <FormControl fullWidth>
          <TextField
            label={langLabel}
            className={classes.marginDense}
            InputLabelProps={InputLabelProps}
            onChange={onChange}
            select
            value={value || []}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  horizontal: 'left',
                  vertical: 'bottom',
                },
                getContentAnchorEl: null,
                MenuListProps: {
                  className: classes.root,
                },
              },
              multiple: true,
            }}
            {...props}
          >
            {options &&
              options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </FormControl>
      ),
      select: (
        <FormControl fullWidth>
          <TextField
            label={langLabel}
            className={classes.marginDense}
            InputLabelProps={InputLabelProps}
            onChange={onChange}
            select
            value={value}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  horizontal: 'left',
                  vertical: 'bottom',
                },
                getContentAnchorEl: null,
                MenuListProps: {
                  className: classes.root,
                },
              },
            }}
            {...props}
          >
            {options &&
              options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </FormControl>
      ),
      textarea: (
        <FormControl fullWidth>
          <TextField
            onChange={onChange}
            value={value}
            InputLabelProps={InputLabelProps}
            className={classes.marginDense}
            multiline={multiline}
            {...props}
          />
        </FormControl>
      ),
    };
    if (fieldType) return field[fieldType];
    return (
      <FormControl fullWidth>
        <TextField
          label={langLabel}
          className={classes.marginDense}
          InputLabelProps={InputLabelProps}
          onChange={onChange}
          value={value}
          {...props}
        />
      </FormControl>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    language: state.selectedLanguage,
    verbiage: state.selectedVariantVerbiage,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectVariantVerbiage: selectVariantVerbiageAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BaseInput));
