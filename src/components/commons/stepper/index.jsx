import { cloneDeep } from 'lodash';
import React, { Component } from 'react';

import {
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  withStyles,
} from '@material-ui/core';

// components
import { LangButton, TYPES, VARIANTS } from './../button';
import { Validate } from './../input/validate';
import FormBlock from './../form';
import Icon from './../icon';

import {
  constants,
} from '../../../providers/config/';

const {
  GENERAL,
} = constants;

const styles = theme => ({
  back: {
    backgroundColor: theme.palette.primary.main,
    padding: `${theme.spacing(2)}px`,
  },
  button: {
    margin: 0,
  },
  column: {
    marginLeft: 2,
    padding: theme.spacing(2),
    transform: 'translateZ(0)',
  },
  content: {
    padding: `${theme.spacing(6)}px 0 0 0`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
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
  step: {
    '& *[class*="MuiStepIcon-active"] circle': {
      color: theme.palette.primary.main,
    },
    '& circle': {
      color: `${theme.palette.disabled.main}`,
    },
  },
  stepper: {
    backgroundColor: theme.palette.secondary.light,
    border: '1px solid #cccccc',
  },
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

  componentWillReceiveProps = (nextProps) => {
    const {
      proxy: {
        verbiage,
      },
    } = nextProps;

    const {
      proxy,
    } = this.props;

    // get forms
    if (verbiage !== proxy.verbiage) {
      this.setState({
        forms: this.getForms(nextProps) || [],
      });
    }
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
      copy,
      proxy: {
        verbiage,
      },
      service,
    } = props;

    return verbiage && verbiage(copy.forms)

      // filter by type
      .filter((form) => {
        // set general default and selected forms type
        return form.value.includes(GENERAL) || form.value.includes(service.id);
      })

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
  }

  render () {
    const {
      errors,
      steps,
    } = this.state;

    const {
      classes,
      copy,
      proxy: {
        language,
        verbiage,
      },
      document,
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
              >
                <StepLabel className={classes.step}>{label}</StepLabel>
              </StepButton>
              <StepContent>
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
                      key={key}
                    />
                  );
                })}
                {steps > 0 &&
                  <LangButton
                    lang={copy.back}
                    onClick={handleStepperPrev}
                    variant={VARIANTS.OUTLINED}
                    typeButton={TYPES.LINK}>
                    <Icon name="angle-left-b" className={classes.icon} />
                  </LangButton>
                }
                <LangButton
                  lang={form.cta}
                  onClick={handleStepperNext}
                  variant={VARIANTS.OUTLINED}
                  typeButton={stepForms.length !== (steps + 1) ? TYPES.PRIMARY : TYPES.SECONDARY}
                  className={classes.cta}>
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
