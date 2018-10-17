import React from 'react';
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
const HomePage = Async(() => import('./containers/home/index').then(module => module.default), { name: 'Home' });
const SearchPage = Async(() => import('./containers/search/index').then(module => module.default), { name: 'Search' });
const NoMatch = Async(() => import('./containers/404/index').then(module => module.default), { name: 'Not Found' });

// main
const App = () => (
  <Router>
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
  </Router>
);


export default App;
