import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Commons
import Async from './components/async-component';
import Header from './components/modules/header/index';
import Footer from './components/modules/footer/index';
import PreLoader from './components/modules/commons/preloader/index';

// Styles
import styles from './externals/styles/index.scss';

// Pages*
const HomePage = Async(() => import('./components/home/index').then(module => module.default), { name: 'Home' });
const SearchPage = Async(() => import('./components/search/index').then(module => module.default), { name: 'Search' });
const NoMatch = Async(() => import('./components/404/index').then(module => module.default), { name: 'Not Found' });

// Main
const App = () => (
  <Router>
    <div id="app">
      {/* Preloader */}
      <PreLoader/>

      {/* Header */}
      <Header />

      {/* Main Container */}
      <div className={styles.global}>
        <div className="row">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  </Router>
);


export default App;
