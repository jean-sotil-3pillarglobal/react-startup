// @flow

import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import React, { Fragment, useState } from 'react';

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

// import {
//   CheckNext,
// } from '../../utils/common/check.next';

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
});

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

  const [activeStep, setActiveStep] = useState(0);
  // const [disabled, setDisabled] = useState(true);

  const formProps = useForm({
    mode: 'onChange',
  });

  const { handleSubmit } = formProps;

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

  // // check next enable
  // CheckNext(steps, activeStep, document)
  //   .then((allow) => {
  //     setDisabled(allow);
  //   });

  const getSteps = () => {
    return forms.map((form) => {
      return form.label[language];
    });
  };

  const steps = getSteps();

  const getForm = (i) => {
    return forms[i] || null;
  };

  return (
    <Fragment>
      {steps && (
        <form id={id || 'default'} onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}>
            <Grid item sm={sm} md={md} lg={lg}>
              <Paper elevation={0} className={className}>
                <Stepper
                  activeStep={activeStep}
                  orientation="vertical"
                >
                  {steps.map((label, i) => {
                    const form = getForm(i);

                    return (
                      <Step key={label}>
                        <StepLabel>
                          {label}
                        </StepLabel>
                        <StepContent>
                          {form.rows && form.rows.map((row, y) => {
                            const key = `${form.value}_row_${y}`;

                            return (
                              <FormBlock
                                copy={row}
                                document={document}
                                formProps={formProps}
                                key={key}
                                proxy={{
                                  document,
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
                              variant="progress"
                              steps={steps.length + 1}
                              position="static"
                              activeStep={activeStep}
                              nextButton={
                                <LangButton
                                  lang={activeStep === steps.length - 1 ? form.cta : form.cta}
                                  onClick={activeStep === steps.length - 1 ? onSubmit : handleNext}
                                  variant={variant}
                                  typeButton={TYPES.CONTAINED}
                                  className={classnames(classes.cta, steps.length === (activeStep + 1) && classes.submit)}>
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
      )}
    </Fragment>
  );
}

export default withStyles(styles)(StepperForm);
