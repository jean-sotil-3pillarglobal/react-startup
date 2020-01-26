import React, { Component } from 'react';

import Loading from '../components/commons/preloader';

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
      return C ? <C {...this.props} /> : <Loading />;
    }
  };
};

export default asyncComponent;
