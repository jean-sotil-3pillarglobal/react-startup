import React, { Component, Fragment } from 'react';
import UAParser from 'ua-parser-js';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  withStyles,
} from '@material-ui/core';

// async component
import Async from './containers/async-component';

// action creators
import { setDeviceAction } from './store/actions/global';

const styles = theme => ({
  container: {
    margin: '0 auto',
  },
});

// containers
const HomePage = Async(() => import('./containers/home').then(module => module.default), { name: 'Home' });

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
    // check browser
    this.updateDimensions();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render () {
    const { classes, device } = this.props;
    return (device ?
      <Fragment>
        <Router>
          <div className={classes.container}>
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </Fragment> : null);
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    device: state.getDevice,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setDevice: setDeviceAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
