import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import {
  withStyles,
} from '@material-ui/core';

import {
  setServiceCategoryAction,
} from './../../store/actions/services';

import {
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

import Helmet from '../../components/commons/helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';

// commons
import ServicesLayout from '../../components/layouts/commons/services_1';
import ClerksLayout from '../../components/layouts/commons/clerks_1';

import BannerA from './banner-1';
import SectionA from './section-1';
import SectionB from './section-2';
import SectionD from './section-4';
import SectionE from './section-5';

// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

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

const init = {
  document: {},
  verbiage: null,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = init;
  }

  static getDerivedStateFromProps = (nextProps) => {
    const {
      selectVariantVerbiage,
      verbiage,
    } = nextProps;

    if (!verbiage) {
      selectVariantVerbiage('default');
    }

    if (verbiage) {
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
        <Header proxy={proxy} />
        <SectionA proxy={proxy} />
        <BannerA proxy={proxy} />

        <ServicesLayout setServiceCategory={this.handleServiceCategory} proxy={proxy} variant="primary" />

        <SectionB proxy={proxy} />
        <ClerksLayout proxy={proxy} variant="dark" />
        <BannerA proxy={proxy} />
        <SectionD proxy={proxy} variant="primary" />
        <SectionE proxy={proxy} />
        <Footer />
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
    selectVariantVerbiage: selectVariantVerbiageAction,
    setServiceCategory: setServiceCategoryAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
