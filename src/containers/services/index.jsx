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

import { scroller as scroll } from 'react-scroll';

import {
  selectLanguageAction,
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
import ScrollToTopOnMount from '../../components/commons/scrollToTopOnMount';
import ServicesLayout from '../../components/layouts/commons/services_1';

// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

import {
  CreateUrlCategoryDetails,
} from './../../providers/utils/url.formatter';

import {
  FindServiceByPath,
  FindServiceCategoryByPath,
} from './../../providers/utils/filter.services';

import {
  constants,
} from './../../providers/config';

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
  'back',
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

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.url !== this.props.match.url) {
      this.setServicesState(true);
      scroll.scrollTo(constants.LINK_CONTACT_FORM_2);
    }
  }

  componentWillUnmount = () => {
    this.reset();
  }

  setServicesState = (refresh) => {
    const {
      category,
      language,
      match: {
        params: {
          locale,
          serviceUrl,
          type,
        },
      },
      selectLanguage,
      setService,
      setServiceCategory,
      setServices,
      verbiage,
    } = this.props;

    if (locale) {
      selectLanguage(locale);
    }

    if (verbiage && type && language) {
      const cloneCategory = cloneDeep(FindServiceCategoryByPath(type, verbiage(copy.categories), language));
      const cloneServices = cloneDeep(verbiage(copy.services).filter(item => item.categories.includes(cloneCategory.id)));

      // find main category
      if (!category || refresh) {
        setServiceCategory(cloneCategory);
        setServices(cloneServices);
      }

      if (serviceUrl) {
        setService(FindServiceByPath(serviceUrl, cloneServices, language) || false);
      } else {
        setService(null);
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
  }

  props: {
    device: string,
    history: Object,
    language: string,
    match: History,
    selectLanguage: Function,
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

    this.reset();
    this.setServicesState();

    cb(true);
  }

  handleServiceListClick = (category, item) => {
    const {
      history,
      language,
    } = this.props;

    // go to service
    this.reset();

    history.push(CreateUrlCategoryDetails(language, category, item));
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
      copy,
      device,
      language,
      verbiage,
    };

    return (
      ((verbiage && category && category.id) &&
      <Fragment>
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
        <Footer proxy={proxy} variant="light" />
        <ScrollToTopOnMount />
      </Fragment>) || <Loading />
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
    selectLanguage: selectLanguageAction,
    selectVariantVerbiage: selectVariantVerbiageAction,
    setService: setServiceAction,
    setServiceCategory: setServiceCategoryAction,
    setServices: setServicesAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Services)));
