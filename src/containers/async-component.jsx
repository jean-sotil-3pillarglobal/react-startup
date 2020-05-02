import React, { Component, Fragment } from 'react';

import Loading from '../components/commons/preloader';
import ScrollToTopOnMount from '../components/commons/scrollToTopOnMount';
import ScrollToTopButton from '../components/commons/scrollToTopButton';

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
          <C {...this.props} />
          <ScrollToTopOnMount />
          <ScrollToTopButton />
        </Fragment>
      ) : <Loading />;
    }
  };
};

export default asyncComponent;
