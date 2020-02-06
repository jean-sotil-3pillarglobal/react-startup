
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollingProvider } from 'react-scroll-section';
import React, { Component } from 'react';
import UAParser from 'ua-parser-js';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

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

// Config
import {
  constants,
} from './providers/config';

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
const Home = Async(() => { return import('./containers/home'); });
const Services = Async(() => { return import('./containers/services'); });
const Blog = Async(() => { return import('./containers/blog'); });
const Four0Four = Async(() => { return import('./containers/404'); });

// paths
const {
  PATHS: {
    SERVICES,
    // SERVICES_DETAILS,
  },
} = constants;

const init = {
  device: null,
};

// main
class App extends Component {
  constructor(props) {
    super(props);
    this.state = init;
  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions = () => {
    const { setDevice, device } = this.props;
    const ua = new UAParser().getDevice();
    const { type } = ua;

    if (type) {
      setDevice(type);
    } else {
      setDevice('desktop');
    }

    return {
      device,
    };
  }

  props: {
    classes: Object,
    device: String,
    language: String,
    setDevice: () => void,
  }

  render () {
    const { classes, language } = this.props;

    const skin = createMuiTheme(SkinProvider('default'));

    return (
      <MuiThemeProvider theme={skin}>
        <CssBaseline />
        <ScrollingProvider>
          <div className={classes.container}>
            <Router>
              <TransitionGroup className={classes.transitions}>
                <CSSTransition
                  key="transition"
                  timeout={{ enter: 300, exit: 300 }}
                  classNames={{
                    enter: classes.appear,
                    enterActive: classes.appearActive,
                    exit: classes.exit,
                    exitActive: classes.exitActive,
                  }}>
                  <div className={classes.switch}>
                    <Switch>
                      <Route exact path="/:locale" component={Home} />
                      <Route exact path={`/:locale/${SERVICES[language]}/:type/:serviceUrl?`} component={Services} />
                      <Route exact path="/blog" component={Blog} />
                      <Route component={Four0Four} />
                    </Switch>

                    <Route exact path="/">
                      {language && <Redirect to={'/'.concat(language)} />}
                    </Route>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </Router>
          </div>
        </ScrollingProvider>
      </MuiThemeProvider>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    device: state.device,
    language: state.language,
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
