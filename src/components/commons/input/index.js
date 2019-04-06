import React, { Component, Fragment } from 'react';
import { FormControl, TextField, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ITEM_HEIGHT = '16px';

const styles = theme => ({
  marginDense: {
    margin: 0,
  },
});

class InputLayout extends Component {
  state = {};

  props: {
    classes: Object,
    fieldType: string,
    id: string,
    InputLabelProps: any,
    label: string,
    lang: string,
    multiline: Boolean,
    onChange: Function,
    options: Array,
    value: any,
    verbiage: Function,
  };

  showOptions (options) {
    const { verbiage, language } = this.props;

    return (verbiage && language) && options.map((option) => {
      const label = verbiage(option.label);
      const value = verbiage(option.value);

      return (
        <MenuItem key={`${value}_select_input`} value={value}>
          {label[language]}
        </MenuItem>
      );
    });
  }

  render() {
    const {
      classes,
      fieldType,
      id,
      InputLabelProps,
      lang,
      language,
      multiline,
      onChange,
      options,
      value,
      verbiage,
    } = this.props;

    const props = JSON.parse(JSON.stringify(this.props));
    delete props.fieldType;
    delete props.options;
    delete props.value;
    delete props.InputLabelProps;
    const label = verbiage && language ? verbiage(lang)[language] : '';

    const field = {
      input: (
        <FormControl fullWidth>
          <TextField
            label={label}
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
            label={label}
            className={classes.marginDense}
            InputLabelProps={InputLabelProps}
            onChange={onChange}
            select
            value={value || []}
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
            {options && this.showOptions(options)}
          </TextField>
        </FormControl>
      ),
      select: (
        <FormControl fullWidth>
          <TextField
            label={label}
            className={classes.marginDense}
            InputLabelProps={InputLabelProps}
            onChange={onChange}
            select
            value={value}
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
            {options && this.showOptions(options)}
          </TextField>
        </FormControl>
      ),
      textarea: (
        <FormControl fullWidth>
          <TextField
            className={classes.marginDense}
            InputLabelProps={InputLabelProps}
            label={label}
            multiline={multiline}
            onChange={onChange}
            value={value}
            {...props}
          />
        </FormControl>
      ),
    };

    return (
      <Fragment>
        {field[fieldType] || field['input']}
      </Fragment>
    );
  }
}

export const LangInput = withStyles(styles)(InputLayout);

