import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Section } from 'react-scroll-section';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import {
  withStyles,
} from '@material-ui/core';

import {
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

import {
  setServiceCategoryAction,
  setServiceAction,
  setServicesAction,
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

class Services extends Component {
  componentDidMount = () => {
    const {
      selectVariantVerbiage,
      verbiage,
    } = this.props;

    if (!verbiage) {
      selectVariantVerbiage('default');
    }

    this.setServicesState();
  }

  // shouldComponentUpdate = (nextProps) => {
  //   return this.props.category !== nextProps.category ||
  //   this.props.language !== nextProps.language ||
  //     this.props.service !== nextProps.service ||
  //     this.props.services !== nextProps.services;
  //     this.props.verbiage !== nextProps.verbiage;
  // }

  componentDidUpdate = (prevProps) => {
    const {
      category,
      history,
      language,
      service,
    } = this.props;

    if (prevProps.language !== language) {
      history.push(category.url[language].concat(service.url[language]));
    }

    this.setServicesState();
  }

  componentWillUnmount = () => {
    this.reset();
  }

  setServicesState = () => {
    const {
      category,
      language,
      match: {
        params: {
          serviceUrl,
          type,
        },
      },
      service,
      services,
      setService,
      setServiceCategory,
      setServices,
      verbiage,
    } = this.props;

    if (verbiage && type) {
      // find main category
      if (!category) {
        setServiceCategory(FindServiceCategoryByPath(type, verbiage(copy.categories), language));
      }

      if (category && !services) {
        // filter services by category id
        setServices(verbiage(copy.services).filter(item => item.categories.includes(category.id)));
      }

      if (services && serviceUrl && service === null) {
        setService(FindServiceByPath(serviceUrl, services, language) || false);
      }
    }
  }

  reset = () => {
    const {
      setService,
      setServices,
      setServiceCategory,
    } = this.props;

    setService(null);
    setServiceCategory(null);
    setServices(null);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

  props: {
    device: string,
    history: Object,
    language: string,
    match: History,
    selectVariantVerbiage: Function,
    setService: Function,
    setServiceCategory: Function,
    verbiage: Function,
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
    }, 0);
    // history.push(category.url[language].concat(item.url[language]));
  }

  props: {
    category: Object,
    service: Object,
    services: Array,
    setService: () => void,
    setServiceCategory: () => void,
    setServices: () => void,
  }

  render () {
    const {
      category,
      device,
      language,
      service,
      services,
      verbiage,
    } = this.props;

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
    services: state.services,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectVariantVerbiage: selectVariantVerbiageAction,
    setService: setServiceAction,
    setServiceCategory: setServiceCategoryAction,
    setServices: setServicesAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Services)));
