
import React, { Component } from 'react';
import Helmet from 'react-helmet';

class HeaderHelmet extends Component {
  getValues = (value) => {
    const { proxy } = this.props;
    const { verbiage, language } = proxy;

    return (verbiage && language) && verbiage(value)[language];
  }

  props: {
    copy: Object,
    proxy: Object,
  }

  render() {
    const { copy } = this.props;
    const { title, description, keywords } = copy;

    return (
      <Helmet>
        <title>{this.getValues(title)}</title>
        <meta name="description" content={this.getValues(description)} />
        <meta name="keywords" content={this.getValues(keywords)} />
      </Helmet>
    );
  }
}

export default HeaderHelmet;
