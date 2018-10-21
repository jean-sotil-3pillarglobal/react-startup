import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// async component
import Async from './containers/async-component';

// components
import Header from './components/header';
import Footer from './components/footer';
import PreLoader from './components/commons/preloader';

// styles
import styles from './resources/styles/index.scss';

// containers
import HomePage from './containers/home';
import SearchPage from './containers/search';

// main
class App extends Component {
  render () {
    return (<Router>
      <div id="app">
        {/* Preloader */}
        <PreLoader/>

        {/* Header */}
        <Header />

        {/* Main Container */}
        <div>
          <div className="row">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>);
  }
}

export default App;
