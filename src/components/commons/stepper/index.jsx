// @flow

import { useForm, FormContext } from 'react-hook-form';
import React, { Fragment, useState, useEffect } from 'react';

import {
  Grid,
  MobileStepper,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  withStyles,
} from '@material-ui/core';

// components
import { LangButton, TYPES } from './../button';
import FormBlock from './../form';
import Icon from './../icon';

import {
  CheckNext,
} from '../../../providers/utils/check.next';

import ThemeBackground from '../../../providers/utils/theme.background';
import ThemeColor from '../../../providers/utils/theme.color';

const styles = theme => ({
  caption: {
    display: 'inline-block',
    margin: `${theme.spacing(6)}px 0`,
    textTransform: 'capitalize',
  },
  finished: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  icon: {
    color: 'red',
  },
  item: props => ({
    background: ThemeBackground(props, theme, 'dark'),
    border: `1px solid ${ThemeBackground(props, theme, 'light')}`,
  }),
  mobileStepper: props => ({
    background: ThemeBackground(props, theme, 'main'),
    border: `1px solid ${ThemeBackground(props, theme, 'dark')}`,
    marginBottom: theme.spacing(1),
  }),
  mobileStepperActive: props => ({
    background: ThemeBackground(props, theme, 'dark'),
    color: ThemeColor(props, theme),
  }),
});

const getSteps = (forms, language) => {
  return forms.map((form) => {
    return form.label[language];
  });
};

const getForm = (i, forms) => {
  return forms[i] || null;
};

function StepperForm (props: {
  // size
  sm: Integer,
  md: Integer,
  lg: Integer,
  // props
  classes: Object,
  className: Object,
  copy: Object,
  document: Object,
  forms: Array,
  id: String,
  onBlur: Function,
  onChange: Function,
  // onReset: Function,
  onSubmit: Function,
  proxy: Object,
  variant: String,
}) {
  const {
    // size
    lg,
    md,
    sm,
    // props
    classes,
    className,
    copy,
    document,
    id,
    onBlur,
    onChange,
    forms,
    // onReset,
    onSubmit,
    proxy: {
      language,
      verbiage,
    },
    variant,
  } = props;

  const formProps = useForm({
    mode: 'onChange',
  });

  const {
    handleSubmit,
    setValue,
  } = formProps;

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    Object.keys(document).forEach((k) => {
      const value = document[k];

      if (typeof value === 'string' || typeof value === 'object') {
        setValue(k, value, true);
      }
    });
  }, [activeStep]);

  const [disabled, setDisabled] = useState(true);

  const handleNext = () => {
    setActiveStep(step => step + 1);
  };

  const handleBack = () => {
    setActiveStep(step => step - 1);
  };

  const handleBlur = (event) => {
    onBlur(event);
  };

  const handleChange = (e) => {
    onChange(e);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setDisabled(true);
  //   onReset();
  // };

  const steps = getSteps(forms, language);

  // // check next enable
  CheckNext(forms, activeStep, document)
    .then(({ allow, fields }) => {
      const errors = Object.keys(formProps.errors);

      const check = fields.find(f => errors.includes(f.key));

      if (allow === false && !check) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    });

  return (
    <Fragment>
      {steps && (
        <FormContext {...formProps}>
          <form id={id || 'default'} onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item sm={sm} md={md} lg={lg} className={classes.item}>
                <Paper elevation={2} className={className}>
                  <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                  >
                    {steps.map((label, i) => {
                      const form = getForm(i, forms);

                      return (
                        <Step key={label}>
                          <StepLabel className={classes.item}>
                            {label}
                          </StepLabel>
                          <StepContent>
                            {form.rows && form.rows.map((row, y) => {
                              const key = `${form.value}_row_${y}`;

                              return (
                                <FormBlock
                                  copy={row}
                                  document={document}
                                  key={key}
                                  proxy={{
                                    handleBlur,
                                    handleChange,
                                    language,
                                    verbiage,
                                  }}
                                  variant={variant}
                                />
                              );
                            })}

                            {activeStep < steps.length && (
                              <MobileStepper
                                className={classes.mobileStepper}
                                variant="dots"
                                steps={steps.length + 1}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                  <LangButton
                                    disabled={disabled}
                                    lang={activeStep === steps.length - 1 ? form.cta : form.cta}
                                    onClick={activeStep === steps.length - 1 ? onSubmit : handleNext}
                                    variant={variant}
                                    typeButton={TYPES.CONTAINED}
                                    className={!disabled && classes.mobileStepperActive}>
                                    <Icon name="angle-right-b" className={classes.icon} />
                                  </LangButton>
                                }
                                backButton={
                                  <LangButton
                                    disabled={activeStep === 0}
                                    lang={copy.back}
                                    onClick={handleBack}
                                    typeButton={TYPES.CONTAINED}
                                    variant={variant}
                                    className={activeStep !== 0 && classes.mobileStepperActive}
                                  >
                                    <Icon name="angle-left-b" className={classes.icon} />
                                  </LangButton>
                                }
                              />
                            )}
                          </StepContent>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Paper>
              </Grid>
            </Grid>
          </form>
        </FormContext>
      )}
    </Fragment>
  );
}

export default withStyles(styles)(StepperForm);
