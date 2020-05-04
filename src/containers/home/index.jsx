import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import {
  withStyles,
} from '@material-ui/core';

import { Element } from 'react-scroll';

import {
  setServiceCategoryAction,
} from './../../store/actions/services';

import {
  selectLanguageAction,
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

import Helmet from '../../components/commons/helmet';
import Footer from '../../components/footer';

// commons
import ServicesLayout from '../../components/layouts/commons/services_1';
import ClerksLayout from '../../components/layouts/commons/clerks_1';

import BannerA from './banner-1';
import SectionA from './section-1';
import SectionB from './section-2';
import SectionD from './section-4';

// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

import { constants } from './../../providers/config';

const styles = () => ({
  container: {
    margin: 0,
  },
});

const NODE = 'headers';
const SLOT = 'home';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'description',
  'keywords',
  'title',
]);

class Home extends Component {
  state = {
    verbiage: null,
  };

  static getDerivedStateFromProps = (nextProps, nextState) => {
    const {
      match: {
        params,
      },
      selectLanguage,
      selectVariantVerbiage,
      verbiage,
    } = nextProps;

    const init = {
      ...nextState,
    };

    if (!verbiage) {
      selectVariantVerbiage('default');
    }

    if (params.locale) {
      selectLanguage(params.locale);
    }

    if (verbiage && !nextState.verbiage) {
      return {
        verbiage,
      };
    }

    return init;
  }

  props: {
    device: string,
    isHeaderVisible: Boolean,
    language: string,
    lead: Object,
    leadType: string,
    setServiceCategory: Function,
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
      isHeaderVisible,
      language,
      lead,
      leadType,
    } = this.props;

    const {
      verbiage,
    } = this.state;

    const proxy = {
      device,
      isHeaderVisible,
      language,
      lead,
      leadType,
      verbiage,
    };

    return (
      <Fragment>
        <Helmet proxy={proxy} copy={copy} />
        <SectionA proxy={proxy} />
        <BannerA proxy={proxy} />

        <Element name={constants.LINK_SERVICES_1}>
          <ServicesLayout setServiceCategory={this.handleServiceCategory} proxy={proxy} variant="primary" />
        </Element>

        <Element name={constants.LINK_SECTION_2}>
          <SectionB proxy={proxy} />
        </Element>

        <Element name={constants.LINK_SECTION_3}>
          <ClerksLayout proxy={proxy} variant="primary" />
        </Element>

        <Element name={constants.LINK_SECTION_4}>
          <SectionD proxy={proxy} variant="primary" />
        </Element>

        <Footer variant="dark2" proxy={proxy} />
      </Fragment>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    device: state.device,
    isHeaderVisible: state.isHeaderVisible,
    language: state.language,
    lead: state.lead,
    leadType: state.leadType,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectLanguage: selectLanguageAction,
    selectVariantVerbiage: selectVariantVerbiageAction,
    setServiceCategory: setServiceCategoryAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
