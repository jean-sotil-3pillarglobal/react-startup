import React, { Component, Fragment } from 'react';

import Header from '../components/header';
import Loading from '../components/commons/preloader';
import ScrollToTopButton from '../components/commons/scrollToTopButton';
import ScrollToTopOnMount from '../components/commons/scrollToTopOnMount';

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    }

    componentDidMount = () => {
      importComponent()
        .then((cmp) => {
          this.setState({ component: cmp.default });
        });
    }

    render = () => {
      const C = this.state.component;

      return C ? (
        <Fragment>
          <Header />
          <C {...this.props} />
          <ScrollToTopOnMount />
          <ScrollToTopButton />
        </Fragment>
      ) : <Loading />;
    }
  };
};

export default asyncComponent;
