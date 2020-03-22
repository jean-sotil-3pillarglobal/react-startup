import React, { Component, Fragment } from 'react';

import Loading from '../components/commons/preloader';
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
          <C {...this.props} />
          <ScrollToTopOnMount />
        </Fragment>
      ) : <Loading />;
    }
  };
};

export default asyncComponent;
