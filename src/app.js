import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// async component
import Async from './containers/async-component';

// styles
import styles from './resources/styles/index.scss';

// containers
const HomePage = Async(() => import('./containers/home').then(module => module.default), { name: 'Home' });
const SearchPage = Async(() => import('./containers/search').then(module => module.default), { name: 'Home' });

// main
class App extends Component {
  render () {
    return (
      <React.Fragment>
        <CssBaseline />
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

export default App;
