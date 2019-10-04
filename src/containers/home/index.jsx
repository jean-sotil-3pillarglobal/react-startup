import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  withStyles,
} from '@material-ui/core';

import Helmet from '../../components/commons/helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';

import BannerA from './banner-1';
import SectionA from './section-1';
import SectionB from './section-2';
import SectionC from './section-3';
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
// 1 description
// 1 keywords
// 1 title
const copy = LangGenerateTree([NODE, SLOT], [
  'description',
  'keywords',
  'title',
]);

class Home extends Component {
  state: {}

  props: {
    device: string,
    language: string,
    lead: Object,
    leadType: string,
    verbiage: Function,
  }

  render () {
    const { lead, leadType, verbiage, language, device } = this.props;

    const proxy = {
      device,
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
        <SectionB proxy={proxy} />
        <BannerA proxy={proxy} />
        <SectionC proxy={proxy} />
        <SectionD proxy={proxy} />
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
    language: state.language,
    lead: state.lead,
    leadType: state.leadType,
    verbiage: state.verbiage,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Home));
