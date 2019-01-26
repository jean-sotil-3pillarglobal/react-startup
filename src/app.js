import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  withStyles,
} from '@material-ui/core';

// async component
import Async from './containers/async-component';


const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.light,
  },
});

// containers
const HomePage = Async(() => import('./containers/home').then(module => module.default), { name: 'Home' });
const SearchPage = Async(() => import('./containers/search').then(module => module.default), { name: 'Home' });

// main
class App extends Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Router>
          <div id="container">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
