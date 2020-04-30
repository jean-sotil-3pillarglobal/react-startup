import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import {
  cloneDeep,
} from 'lodash';

import {
  AppBar,
  Grid,
  Toolbar,
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
import { LangButton } from './../../components/commons/button';
import ContactFormLayout from '../../components/layouts/commons/contact_1';
import Loading from './../../components/commons/preloader';
import ScrollToTopOnMount from '../../components/commons/scrollToTopOnMount';
import ServicesLayout from '../../components/layouts/commons/services_1';
import SmartImg from './../../components/commons/img';

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

const styles = (theme) => ({
  container: {
    margin: 0,
  },
  logo: {
    display: 'block',
    margin: 0,
    width: '50%',
  },
  navigation: {
    padding: theme.spacing(2),
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
  'id',
  'logo',
  'services',
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
          url,
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

      if (url) {
        setService(FindServiceByPath(url, cloneServices, language) || false);
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
      classes,
      device,
      history,
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
      verbiage &&
        (
          <Fragment>
            <Helmet proxy={proxy} copy={headers} />
            <AppBar position="fixed">
              <Toolbar variant="dense">
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={classes.navigation}
                >
                  <Grid
                    item
                    sm={12}
                    md={4}
                  >
                    <LangButton
                      lang={copy.back}
                      onClick={() => {
                        history.push('/');
                      }}
                      pos="left"
                      typeButton="link"
                      variant="primary"
                    />
                  </Grid>
                  <Grid
                    item
                    sm={2}
                    md={1}
                    lg={1}>
                    <SmartImg proxy={proxy} src={verbiage(copy.logo)} className={classes.logo} />
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            {category && category.id && (
              <SectionA
                data={{
                  category,
                  service,
                  services,
                }}
                onReset={this.reset}
                onServiceListClick={this.handleServiceListClick}
                proxy={proxy}
              >
                <ContactFormLayout
                  proxy={proxy}
                  variant="primary"
                />
              </SectionA>
            )}

            <ServicesLayout setServiceCategory={this.handleServiceCategory} proxy={proxy} variant="dark2" />
            <Footer proxy={proxy} variant="light" />
            <ScrollToTopOnMount />
          </Fragment>
        ) || <Loading />
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
