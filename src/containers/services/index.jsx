import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import {
  cloneDeep,
} from 'lodash';

import {
  withStyles,
} from '@material-ui/core';

import {
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

import {
  setServiceCategoryAction,
  setServiceAction,
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
  FindServiceByPath,
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
  'categories',
  'description',
  'keywords',
  'services',
  'title',
]);

const init = {
  category: null,
  document: {},
  service: null,
  services: null,
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
        params: {
          serviceUrl,
          type,
        },
      },
      category,
      selectVariantVerbiage,
      service,
      setService,
      setServiceCategory,
      verbiage,
    } = nextProps;

    const data = cloneDeep(init);

    if (!verbiage) {
      selectVariantVerbiage('default');
    }

    if (verbiage && !category.id) {
      setServiceCategory(FindServiceCategoryByPath(type, verbiage(copy.categories), language));
    } else if (category.id) {
      data.category = category;
      data.services = verbiage(copy.services).filter(item => item.categories.includes(category.id));
    }

    if (!service.id && serviceUrl && data.services) {
      setService(FindServiceByPath(serviceUrl, data.services, language));
    }

    if (service.id) {
      data.service = service;
    }

    return data;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.category !== nextState.category ||
      this.state.service !== nextState.service;
  }

  componentWillUnmount = () => {
    this.reset();
  }

  reset = () => {
    const {
      setService,
      setServiceCategory,
    } = this.props;

    setServiceCategory({});
    setService({});
    this.setState(init);
  }

  props: {
    device: string,
    language: string,
    setService: Function,
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

  handleServiceListClick = (item) => {
    const { setService } = this.props;
    setService(item);
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
      service,
      services,
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
            data={{
              category,
              service,
              services,
            }}
            onServiceListClick={this.handleServiceListClick}
            proxy={proxy}
          >
            <ContactFormLayout
              document={document}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              proxy={proxy}
              variant="light"
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
    service: state.service,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectVariantVerbiage: selectVariantVerbiageAction,
    setService: setServiceAction,
    setServiceCategory: setServiceCategoryAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Services)));
