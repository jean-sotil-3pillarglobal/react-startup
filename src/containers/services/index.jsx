import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import {
  withStyles,
} from '@material-ui/core';

import {
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

import {
  setServiceCategoryAction,
} from './../../store/actions/services';

import Helmet from '../../components/commons/helmet';
import Footer from '../../components/footer';
import SectionA from './section-1';

// commons
import ContactFormLayout from '../../components/layouts/commons/contact_1';
import ServicesLayout from '../../components/layouts/commons/services_1';

// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

import {
  FindServiceCategoryByPath,
} from './../../providers/utils/filter.services';

const styles = () => ({
  container: {
    margin: 0,
  },
});

const NODE = 'headers';
const SLOT = 'services';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'description',
  'keywords',
  'categories',
  'title',
]);

const init = {
  category: null,
  document: {},
};

class Services extends Component {
  constructor(props) {
    super(props);

    // init
    this.state = init;
  }

  static getDerivedStateFromProps = (nextProps) => {
    const {
      language,
      match: {
        url,
      },
      selectVariantVerbiage,
      category,
      setServiceCategory,
      verbiage,
    } = nextProps;

    if (!verbiage) {
      selectVariantVerbiage('default');
    }

    if (verbiage && !category.id) {
      setServiceCategory(FindServiceCategoryByPath(url, verbiage(copy.categories), language));
    }

    if (category.id) {
      return {
        category,
      };
    }

    return init;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.category !== nextState.category;
  }

  componentWillUnmount = () => {
    this.reset();
  }

  reset = () => {
    const {
      setServiceCategory,
    } = this.props;

    setServiceCategory({});
    this.setState(init);
  }

  props: {
    device: string,
    language: string,
    setServiceCategory: Function,
    verbiage: Function,
  }

  handleChange = (event) => {
    const { document } = this.state;
    const { target } = event;
    const { name, value } = target;

    document[name] = value;

    this.setState({
      ...this.state,
      document,
    });
  }

  handleServiceCategory = (item, cb) => {
    const {
      setServiceCategory,
    } = this.props;

    setServiceCategory(item);
    cb(true);
  }

  render () {
    const {
      device,
      language,
      verbiage,
    } = this.props;

    const {
      document,
      category,
    } = this.state;

    const proxy = {
      device,
      language,
      verbiage,
    };

    return (
      <Fragment>
        {category && category.id &&
        <Fragment>
          <Helmet proxy={proxy} copy={copy} />
          <SectionA
            category={category}
            proxy={proxy}
          >
            <ContactFormLayout
              document={document}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              proxy={proxy}
              variant="primary"
            />
          </SectionA>
          <ServicesLayout setServiceCategory={this.handleServiceCategory} proxy={proxy} variant="light2" />
          <Footer />
        </Fragment>
        }
      </Fragment>
    );
  }
}

function mapStateToProps (state) {
  return {
    category: state.category,
    device: state.device,
    language: state.language,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectVariantVerbiage: selectVariantVerbiageAction,
    setServiceCategory: setServiceCategoryAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Services)));
