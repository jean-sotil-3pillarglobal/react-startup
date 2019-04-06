import React, { Component, Fragment } from 'react';
import UAParser from 'ua-parser-js';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core';

// providers
import SkinProvider from './providers/skins';

// async component
import Async from './containers/async-component';

// actions
import { setDeviceAction } from './store/actions/global';
import { fetchLeadAction } from './store/actions/home';

const styles = theme => ({
  container: {
    margin: '0 auto',
  },
});

// containers
const Home = Async(() => import('./containers/home').then(module => module.default), { name: 'Home' });
const Quote = Async(() => import('./containers/quote').then(module => module.default), { name: 'Get A Quote' });
const Blog = Async(() => import('./containers/blog').then(module => module.default), { name: 'Blog' });

// main
class App extends Component {
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

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillMount () {
    const { lead, fetchLead, leadType } = this.props;

    // fetch lead information once
    if (!lead.type) {
      // fetchLead('f61079bf-88a6-4b0e-8f00-3fca1aef9180'); // health
      fetchLead('10707597-098e-4bbc-99a5-60574921877e'); // auto
    }

    // check browser
    this.updateDimensions();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render () {
    const { classes, lead, leadType } = this.props;
    const skin = createMuiTheme(SkinProvider(leadType));

    return (
      <Fragment>
        {leadType &&
          <MuiThemeProvider theme={skin}>
            <Fragment>
              <CssBaseline />
              <Router>
                <div className={classes.container}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/get-a-quote" component={Quote} />
                  <Route exact path="/blog" component={Blog} />
                </div>
              </Router>
            </Fragment>
          </MuiThemeProvider>
        }
      </Fragment>
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
