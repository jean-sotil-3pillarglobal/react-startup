import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// async component
import Async from './containers/async-component';

// components
import Header from './components/header/index';
import Footer from './components/footer/index';
import PreLoader from './components/commons/preloader/index';

// styles
import styles from './resources/styles/index.scss';

// containers
import HomePage from './containers/home/index';
import SearchPage from './containers/search/index';

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
