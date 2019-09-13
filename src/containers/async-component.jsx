import React from 'react';
import Loading from '../components/commons/preloader';

export default (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor (props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount () {
      if (!this.state.Component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render () {
      const { Component } = this.state;

      if (Component) {
        return (
          <Component {...this.props} {...collection} />
        );
      }

      return <Loading />;
    }
  }
);
