import { cloneDeep } from 'lodash';
import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import {
  Grid,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  withStyles,
} from '@material-ui/core';

// config
import { constants } from './../../../providers/config';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

// components
import { LangButton, TYPES, VARIANTS } from './../../../components/commons/button';
import { Validate } from './../../../components/commons/input/validate';
import Icon from './../../../components/commons/icon';
import NavbarSimple from './../../../components/commons/navbar/simple';
import SectionBlock from './../../../components/layouts/section';

// forms
import QuoteForm from './../forms';

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
  headroom: {
    padding: `${theme.spacing(2)}px 0`,
    width: '100%',
  },
  pinned: {},
  section: {
    padding: `${theme.spacing(4)}px 0`,
  },
});

const NODE = 'quote';
const SLOT = 'section_1';
// copy:
// back button
const copy = LangGenerateTree([NODE, SLOT], [
  'back',
  'forms',
  'title',
]);

const init = {
  completed: {},
  document: {},
  errors: {},
  forms: [],
  isStickyAds: false,
  isStickyForm: false,
  steps: 0,
  type: '',
};

class SectionA extends Component {
  constructor(props) {
    super(props);

    // init
    this.myRef = React.createRef();
    init.forms = this.getForms(props) || [];
    this.state = init;
  }

  componentWillReceiveProps = (nextProps) => {
    const {
      proxy: {
        lead,
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

    // populate if already exist
    if (lead) {
      this.setState({
        document: cloneDeep(lead) || {},
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
      match: {
        params: {
          type,
        },
      },
      proxy: {
        verbiage,
      },
    } = props;

    return verbiage && verbiage(copy.forms)

      // filter by type
      .filter((form) => {
        // set general default and selected forms type
        return form.value === GENERAL || form.value.includes(type);
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
      document,
      errors,
    } = this.state;

    // validating value && type
    errors[name] = Validate(event, document[name] || '', type);
    this.checkListener(name);

    this.setState({
      errors,
    });
  }

  handleChange = (event) => {
    const { document } = this.state;
    const { target } = event;
    const { name, value } = target;

    document[name] = value;

    this.setState({
      ...this.state,
      document,
    });
  }

  handleStepperCompleted = (i) => {
    const {
      completed,
    } = this.state;

    completed[i] = true;

    this.setState({
      completed,
    });
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

  handleStickyAds = (isStickyAds) => {
    this.setState({
      isStickyAds,
    });
  }

  handleStickyForm = (isStickyForm) => {
    this.setState({
      isStickyForm,
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
    history: any,
    proxy: Object,
  }

  render () {
    const {
      document,
      errors,
      steps,
    } = this.state;

    const {
      classes,
      history,
      proxy: {
        language,
        verbiage,
      },
    } = this.props;

    const {
      handleBlur,
      handleChange,
      handleStepperIndex,
      handleStepperNext,
      handleStepperPrev,
    } = this;

    const stepForms = this.getSteps();
    const formTip = (this.getForm(steps) && this.getForm(steps)) || null;

    return (
      <Fragment>
        <div ref={this.myRef}>
          <NavbarSimple back={copy.back} title={(formTip && formTip.tip[language]) || ''} caption={(formTip && formTip.tipSub[language]) || ''} icon={formTip && formTip.icon} history={history} />
          <SectionBlock
            variant="light"
            className={classes.section}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
              className={classes.form}>
              <Grid
                item
                sm={12}
                md={6}
                lg={6}
                xl={4}>
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
                          <QuoteForm proxy={{
                            document,
                            errors,
                            form,
                            handleBlur,
                            handleChange,
                            language,
                            verbiage,
                          }} />
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
              </Grid>
            </Grid>
          </SectionBlock>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
