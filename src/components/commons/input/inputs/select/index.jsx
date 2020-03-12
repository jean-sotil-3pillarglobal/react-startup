// @flow


import React, { Component } from 'react';
import Select, { components } from 'react-select';

import {
  FormControl,
  InputLabel,
  withStyles,
} from '@material-ui/core';

// components
import Error from '../error';
import Icon from '../../../icon';

const styles = () => ({
  input: {},
});

const customStyles = {
  control: () => ({
    background: '#f7f7f7',
    border: '1px solid transparent',
    borderRadius: '0 0 0 0',
    fontSize: '16px',
    padding: '.6em 0',
    textTransform: 'capitalize',
  }),
  indicatorsContainer: () => ({
    padding: '16px',
    position: 'absolute',
    right: 0,
    top: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  multiValue: (provided, state) => {
    return ({
      ...provided,
      '& div:first-of-type': {
        width: '100%',
      },
      color: (state.isSelected && state.theme.primary.light) || '',
      fontSize: '1.2em',
      padding: '4px',
      textTransform: 'capitalize',
      width: '75%',
    });
  },
};

const DropdownIndicator = (props: ElementConfig<typeof components.DropdownIndicator>) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name="error" color="error" />
    </components.DropdownIndicator>
  );
};

const ForwardTextField = React.forwardRef((props: {
  disabled: Boolean,
  formProps: Object,
  inputRef: Object,
  isMulti: Boolean,
  label: String,
  name: String,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  options: Array,
  placeholder: String,
  required: Boolean,
  value: Object,
}, ref) => {
  const {
    disabled,
    formProps,
    inputRef,
    isMulti,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    options,
    placeholder,
    required,
    value,
  } = props;

  const {
    clearError,
    errors,
    register,
    setValue,
  } = formProps;

  const error = errors[name] !== undefined;

  const getValue = (val) => {
    const { type } = props;
    const v = val;

    if (val !== undefined) {
      if (type === 'text') {
        options.sort((a, b) => {
          if (a.label > b.label) {
            return 1;
          } else if (a.label < b.label) {
            return -1;
          }
          return 0;
        });
      } else if (type === 'number') {
        v.sort((a, b) => {
          if (Number(a.value) > Number(b.value)) {
            return 1;
          } else if (Number(a.value) < Number(b.value)) {
            return -1;
          }
          return 0;
        });
      }

      return v || null;
    }
    return null;
  };

  const handleChange = (e) => {
    const currentValue = getValue(e);

    if (currentValue) {
      clearError(name);
    }

    setValue(name, currentValue, true);
    onChange(e);
  };

  return (
    <FormControl>
      <InputLabel
        style={{
          fontSize: '0.6em',
          position: 'relative',
          top: '-4px',
          transform: 'initial',
        }}
        error={error || false}
        htmlFor={name}
        required={required}
      >
        {label}
      </InputLabel>
      <Select
        className={name}
        closeMenuOnSelect={false}
        components={errors[name] !== undefined && { DropdownIndicator }}
        defaultValue={value || null}
        id={name}
        isMulti={isMulti}
        isClearable
        isDisabled={disabled}
        isSearchable
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        options={options}
        placeholder={placeholder}
        value={value}
        inputVariant="filled"
        inputProps={{
          ref,
        }}
        ref={() => {
          register({ name }, inputRef);
        }}
        styles={customStyles}
      />
      {(error && <Error message={errors[name].message} />) || ''}
    </FormControl>
  );
});

class InputSelectBase extends Component {
  handleChange = (event) => {
    const {
      onChange,
      name,
    } = this.props;

    onChange({
      target: {
        name,
        value: event,
      },
    });
  }

  props: {
    disabled: Boolean,
    error: Boolean,
    errorMsg: String,
    inputRef: any,
    name: String,
    onChange: Function,
    required: Boolean,
  };

  render() {
    const {
      inputRef,
    } = this.props;

    return (
      <ForwardTextField
        {...this.props}
        ref={inputRef}
        onChange={this.handleChange}
      />
    );
  }
}

export default withStyles(styles)(InputSelectBase);
