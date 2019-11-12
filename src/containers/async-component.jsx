import React from 'react';
import { ScrollingProvider } from 'react-scroll-section';

import Loading from '../components/commons/preloader';

export default (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor (props) {
      super(props);
      this.state = { Component: null };
    }

    componentDidMount () {
      if (!this.state.Component) {
        loader().then((Component) => {
          this.setState({ Component });
        });
      }
    }

    render () {
      const { Component } = this.state;

      if (Component) {
        return (
          <ScrollingProvider>
            <Component {...this.props} {...collection} />
          </ScrollingProvider>
        );
      }

      return <Loading />;
    }
  }
);
