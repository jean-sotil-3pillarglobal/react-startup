// @flow

import { useForm, FormContext } from 'react-hook-form';
import React, { Fragment, useState, useEffect } from 'react';
import classnames from 'classnames';

import {
  Grid,
  MobileStepper,
  Paper,
  Step,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  withStyles,
} from '@material-ui/core';

import { Element, scroller } from 'react-scroll';

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
  button: props => ({
    background: ThemeBackground(props, theme, 'dark'),
  }),
  caption: {
    background: theme.palette.primary.light,
    textTransform: 'capitalize',
  },
  finished: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  icon: props => ({
    color: ThemeColor(props, theme),
  }),
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

function QontoStepIcon () {
  return (
    <StepIcon icon={<Icon color="success" name="error" />} />
  );
}


function StepperForm (props: {
  // size
  sm: Integer,
  md: Integer,
  lg: Integer,
  // props
  // onReset: Function,
  classes: Object,
  className: Object,
  copy: Object,
  document: Object,
  forms: Array,
  id: String,
  onBlur: Function,
  onChange: Function,
  onSubmit: Function,
  proxy: Object,
  valid: Boolean,
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
    valid,
    variant,
  } = props;

  const formProps = useForm({
    mode: 'onChange',
  });

  const {
    formState,
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

    if (activeStep !== 0 || formState.dirty) {
      // anchor header on tab change
      scroller.scrollTo('stepper_header', {
        delay: 500,
        duration: 1000,
        smooth: 'easeInOutQuint',
      });
    }
  }, [activeStep]);

  const [disabled, setDisabled] = useState(true);

  const steps = getSteps(forms, language);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onSubmit(formState.isValid);
    }

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

  if (!valid && (activeStep === steps.length + 1)) {
    handleBack();
  }

  return (
    <Fragment>
      {steps && (
        <FormContext {...formProps}>
          <Element name="stepper_header">
            <form id={id || 'default'} onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item sm={sm} md={md} lg={lg} className={classes.item}>
                  <Paper elevation={0} className={className}>
                    <Stepper
                      activeStep={activeStep}
                      orientation="vertical"
                    >
                      {!valid && steps.map((label, i) => {
                        const form = getForm(i, forms);

                        return (
                          <Step key={label}>
                            <StepLabel className={classes.caption}>
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
                                    onClick={handleNext}
                                    variant={variant}
                                    typeButton={TYPES.CONTAINED}
                                    className={classnames(classes.button, !disabled && classes.mobileStepperActive)}>
                                    <Icon name="arrow_right" className={classes.icon} />
                                  </LangButton>
                                }
                                backButton={
                                  <LangButton
                                    disabled={activeStep === 0}
                                    lang={copy.back}
                                    onClick={handleBack}
                                    typeButton={TYPES.CONTAINED}
                                    variant={variant}
                                    className={classnames(classes.button, activeStep !== 0 && classes.mobileStepperActive)}
                                    pos="left"
                                  >
                                    <Icon name="arrow_left" className={classes.icon} />
                                  </LangButton>
                                }
                              />
                            </StepContent>
                          </Step>
                        );
                      })}
                      {valid && (
                        <Step>
                          <StepLabel StepIconComponent={QontoStepIcon} className={classes.item}>
                            Thank you
                          </StepLabel>
                          <StepContent>
                            <LangButton
                              disabled={activeStep === 0}
                              lang={copy.back}
                              onClick={handleBack}
                              typeButton={TYPES.CONTAINED}
                              variant={variant}
                              className={classnames(classes.button, activeStep !== 0 && classes.mobileStepperActive)}
                              pos="left"
                            >
                              <Icon name="arrow_left" className={classes.icon} />
                            </LangButton>
                          </StepContent>
                        </Step>
                      )}
                    </Stepper>
                  </Paper>
                </Grid>
              </Grid>
            </form>
          </Element>
        </FormContext>
      )}
    </Fragment>
  );
}

export default withStyles(styles)(StepperForm);
