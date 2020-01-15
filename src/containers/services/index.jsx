import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Section } from 'react-scroll-section';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

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
import SectionA from './section-1/index';

// commons
import ContactFormLayout from '../../components/layouts/commons/contact_1';
import Loading from './../../components/commons/preloader';
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

// headers:
const headers = LangGenerateTree(['headers', 'services'], [
  'description',
  'keywords',
  'title',
]);

// copy:
const copy = LangGenerateTree(['services', 'section_1'], [
  'categories',
  'services',
  'id',
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

  componentDidMount = () => {
    const {
      selectVariantVerbiage,
      verbiage,
    } = this.props;

    if (!verbiage) {
      selectVariantVerbiage('default');
    }
  }

  static getDerivedStateFromProps = (nextProps, nextState) => {
    const {
      language,
      match: {
        params: {
          serviceUrl,
          type,
        },
      },
      category,
      service,
      setService,
      setServiceCategory,
      verbiage,
    } = nextProps;

    const data = cloneDeep(nextState);

    if (verbiage && category === null) {
      data.category = FindServiceCategoryByPath(type, verbiage(copy.categories), language);
      setServiceCategory(data.category);
    }

    if (data.category) {
      data.services = verbiage(copy.services).filter(item => item.categories.includes(data.category.id));
    }

    if (service === null && serviceUrl && data.services) {
      data.service = FindServiceByPath(serviceUrl, data.services, language);
      setService(data.service || false);
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

    this.setState(cloneDeep(init));
    setServiceCategory(null);
    setService(null);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

  props: {
    device: string,
    history: Object,
    language: string,
    selectVariantVerbiage: Function,
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

  handleServiceListClick = (category, item) => {
    const {
      history,
      language,
      // setService,
    } = this.props;

    // go to service
    this.reset();
    setTimeout(() => {
      history.push(category.url[language].concat(item.url[language]));
    }, 500);
  }

  render () {
    const {
      device,
      language,
      verbiage,
    } = this.props;

    const {
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
      ((verbiage && category && category.id) &&
      <Section id={verbiage(copy.id)}>
        <Helmet proxy={proxy} copy={headers} />
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
            proxy={proxy}
            variant="primary"
          />
        </SectionA>
        <ServicesLayout setServiceCategory={this.handleServiceCategory} proxy={proxy} variant="dark2" />
        <Footer />
      </Section>) || <Loading />
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
