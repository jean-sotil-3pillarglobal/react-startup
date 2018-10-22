import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// async component
import Async from './containers/async-component';

// styles
import styles from './resources/styles/index.scss';

// components
const Header = Async(() => import('./components/header').then(module => module.default), {});
const Footer = Async(() => import('./components/footer').then(module => module.default), {});
const PreLoader = Async(() => import('./components/commons/preloader').then(module => module.default), {});


// containers
const HomePage = Async(() => import('./containers/home').then(module => module.default), { name: 'Home' });
const SearchPage = Async(() => import('./containers/search').then(module => module.default), { name: 'Home' });

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
