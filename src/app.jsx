import React, { Component, Fragment } from 'react';
import UAParser from 'ua-parser-js';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// providers
import SkinProvider from './providers/skins';

// async component
import Async from './containers/async-component';

// actions
import { setDeviceAction } from './store/actions/global';
import { fetchLeadAction } from './store/actions/home';

const styles = theme => ({
  appear: {
    opacity: 0,
    zIndex: 1,
  },
  appearActive: {
    opacity: 1,
    transition: theme.transitions.create(
      ['opacity'],
      { duration: theme.transitions.duration.complex },
    ),
  },
  container: {},
  exit: {
    opacity: 1,
  },
  exitActive: {
    opacity: '0!important',
    transition: theme.transitions.create(
      ['opacity'],
      { duration: theme.transitions.duration.complex },
    ),
  },
  switch: {
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  transitions: {
    position: 'relative',
  },
});

// containers
const Home = Async(() => import('./containers/home').then(module => module.default));
const Services = Async(() => import('./containers/services').then(module => module.default));
const Blog = Async(() => import('./containers/blog').then(module => module.default));
const Four0Four = Async(() => import('./containers/404').then(module => module.default));

// main
class App extends Component {
  componentWillMount () {
    const { lead, fetchLead } = this.props;
    // const uuid = '10707597-098e-4bbc-99a5-60574921877e'; // auto
    // const uuid = 'f61079bf-88a6-4b0e-8f00-3fca1aef9180'; // health
    const uuid = ''; // choose default

    // fetch lead information once
    if (!lead.type && uuid !== '') {
      fetchLead(uuid); // auto
    } else if (uuid === '') {
      // set default values
      fetchLead('');
    }

    // check browser
    this.updateDimensions();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions () {
    const { setDevice } = this.props;
    const ua = new UAParser().getDevice();
    const { type } = ua;
    if (type) {
      setDevice(type);
    } else {
      setDevice('desktop');
    }
  }

  props: {
    classes: Object,
    fetchLead: Function,
    lead: Object,
    leadType: string,
    setDevice: Function,
  }

  render () {
    const { classes, leadType } = this.props;

    const skin = createMuiTheme(SkinProvider(leadType));

    return (
      leadType &&
      <MuiThemeProvider theme={skin}>
        <Fragment>
          <CssBaseline />
          <div className={classes.container}>
            <Route render={({ location }) => (
              <TransitionGroup className={classes.transitions}>
                <CSSTransition
                  key={location.key}
                  timeout={{ enter: 300, exit: 300 }}
                  classNames={{
                    enter: classes.appear,
                    enterActive: classes.appearActive,
                    exit: classes.exit,
                    exitActive: classes.exitActive,
                  }}>
                  <div className={classes.switch}>
                    <Switch location={location} >
                      <Route exact path="/" component={Home} />
                      <Route path="/services/:type" component={Services} />
                      <Route path="/servicios/:type" component={Services} />
                      <Route exact path="/blog" component={Blog} />
                      <Route component={Four0Four} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    device: state.device,
    lead: state.lead,
    leadType: state.leadType,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchLead: fetchLeadAction,
    setDevice: setDeviceAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
