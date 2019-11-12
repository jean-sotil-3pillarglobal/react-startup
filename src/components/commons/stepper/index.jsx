import { cloneDeep } from 'lodash';
import React, { Component } from 'react';
import classnames from 'classnames';

import {
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  withStyles,
} from '@material-ui/core';

import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import { LangButton, TYPES } from './../button';
import { Validate } from './../input/validate';
import FormBlock from './../form';
import Icon from './../icon';

const styles = theme => ({
  back: {
    backgroundColor: theme.palette.primary.main,
    padding: `${theme.spacing(2)}px`,
  },
  button: () => ({
    margin: 0,
  }),
  content: {
    padding: `0 ${theme.spacing(3)}px`,
    [theme.breakpoints.up('sm')]: {},
  },
  cta: {
    width: '100%',
  },
  form: {},
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  section: {
    padding: `${theme.spacing(4)}px 0`,
  },
  step: props => ({
    background: ThemeBackground(props, theme),
    color: ThemeColor(props, theme),
  }),
  stepButton: props => ({
    background: 'transparent',
    color: ThemeColor(props, theme),
  }),
  stepper: props => ({
    '& .MuiFormLabel-root:not(.Mui-error), .MuiTypography-caption': {
      color: ThemeColor(props, theme),
    },
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: ThemeBackground(props, theme, 'dark'),
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color: ThemeColor(props, theme),
    },
    backgroundColor: ThemeBackground(props, theme),
    border: `2px solid ${ThemeColor(props, theme)}`,
  }),
  submit: {},
});

const init = {
  errors: {},
  forms: [],
  steps: 0,
};

class StepperLayout extends Component {
  constructor(props) {
    super(props);
    const stateClone = cloneDeep(init);
    stateClone.forms = this.getForms(props) || [];
    this.state = stateClone;
  }

  componentWillUnmount = () => {
    this.reset();
  }

  getSteps = () => {
    const {
      proxy: {
        language,
      },
    } = this.props;

    const { forms } = this.state;

    return forms && forms.map((form) => {
      return form.label[language];
    });
  }

  getForm = (i) => {
    const {
      forms,
    } = this.state;

    return forms[i] || null;
  }

  getForms = (props) => {
    const {
      forms,
    } = props;

    return forms
      // forms stack
      .map((form, i) => {
        const obj = form;

        // mark
        obj.index = i;

        if (i > 0) {
          obj.disable = true;
        } else {
          obj.current = true;
          obj.disable = false;
        }

        return obj;
      });
  }

  reset = () => {
    this.setState(init);
  }

  handleBlur = (event, type) => {
    const {
      target: {
        name,
      },
    } = event;

    const {
      errors,
      onBlur,
    } = this.state;

    const {
      document,
    } = this.props;

    // validating value && type
    errors[name] = Validate(event, document[name] || '', type);
    this.checkListener(name);

    onBlur(errors);
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event);
  }

  handleStepperIndex = (i) => {
    this.setState({
      steps: i,
    });
  }

  handleStepperNext = () => {
    const {
      steps,
      forms,
    } = this.state;

    if (steps + 1 < forms.length) {
      this.setState({
        steps: steps + 1,
      });
    }
  }

  handleStepperPrev = () => {
    const {
      steps,
    } = this.state;

    if (steps - 1 !== -1) {
      this.setState({
        steps: steps - 1,
      });
    }
  }

  handleStepperReset = () => {
    this.setState({
      steps: 0,
    });
  }

  checkListener = (name) => {
    const { errors, forms } = this.state;
    let current;
    const required = [];

    const checking = forms.map((form) => {
      current = form;
      current.on = false;

      current.rows.forEach((rows) => {
        if (!current.disable && rows.fields.find(field => field.key && field.key.includes(name))) {
          current.dirty = true;
          current.error = false;
          current.on = true;

          // on select form
          rows.fields.forEach((field) => {
            if (field.key.includes(name) && (errors[name] && errors[name].check)) {
              current.error = true;
              required.push(field);
            }
          });
        }
      });

      // check current form
      if (current.on) {
        // check if current
        console.log(current.rows);
      }

      return current;
    });

    this.setState({
      forms: checking,
    });
  }

  props: {
    classes: Object,
    copy: Object,
    document: Object,
    onChange: Function,
    proxy: Object,
    variant: String,
  }

  render () {
    const {
      errors,
      steps,
    } = this.state;

    const {
      classes,
      copy,
      document,
      proxy: {
        language,
        verbiage,
      },
      variant,
    } = this.props;

    const {
      handleBlur,
      handleChange,
      handleStepperIndex,
      handleStepperNext,
      handleStepperPrev,
    } = this;

    const stepForms = this.getSteps();

    return (
      <Stepper activeStep={steps} orientation="vertical" className={classes.stepper}>
        {stepForms.map((label, i) => {
          const form = this.getForm(i);

          return (
            <Step key={`step_label_${label}`}>
              <StepButton
                onClick={() => handleStepperIndex(i)}
                className={classes.stepButton}
              >
                <StepLabel className={classes.step}>{label}</StepLabel>
              </StepButton>
              <StepContent className={classes.content}>
                {form.rows && form.rows.map((row, y) => {
                  const key = `${form.value}_row_${y}`;
                  return (
                    <FormBlock
                      document={document}
                      copy={row}
                      proxy={{
                        document,
                        errors,
                        handleBlur,
                        handleChange,
                        language,
                        verbiage,
                      }}
                      variant={variant}
                      key={key}
                    />
                  );
                })}
                {steps > 0 &&
                  <LangButton
                    lang={copy.back}
                    onClick={handleStepperPrev}
                    variant={variant}
                    typeButton={TYPES.LINK}>
                    <Icon name="angle-left-b" className={classes.icon} />
                  </LangButton>
                }
                <LangButton
                  lang={form.cta}
                  onClick={handleStepperNext}
                  variant={variant}
                  typeButton={TYPES.CONTAINED}
                  className={classnames(classes.cta, stepForms.length !== (steps + 1) && classes.submit)}>
                  <Icon name="angle-right-b" className={classes.icon} />
                </LangButton>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    );
  }
}

export default withStyles(styles)(StepperLayout);
