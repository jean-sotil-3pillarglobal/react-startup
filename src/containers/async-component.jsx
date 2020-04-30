import React, { Component, Fragment } from 'react';

import Loading from '../components/commons/preloader';
import ScrollToTopOnMount from '../components/commons/scrollToTopOnMount';
import ScrollToTopButton from '../components/commons/scrollToTopButton';

// provider
import LangGenerateTree from '../providers/utils/lang.generate.tree';

const NODE = 'commons';
const SLOT = 'default';

// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'top',
]);

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
          <ScrollToTopButton label={copy.top} />
        </Fragment>
      ) : <Loading />;
    }
  };
};

export default asyncComponent;
