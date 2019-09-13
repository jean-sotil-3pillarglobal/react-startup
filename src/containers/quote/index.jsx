import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import {
  withStyles,
} from '@material-ui/core';

import Helmet from '../../components/commons/helmet';
import Footer from '../../components/footer';
import SectionA from './section-1';

// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

import {
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

const styles = () => ({
  container: {
    margin: 0,
  },
});

const NODE = 'headers';
const SLOT = 'quote';
// copy:
// 1 description
// 1 keywords
// 1 title
const copy = LangGenerateTree([NODE, SLOT], [
  'description',
  'keywords',
  'title',
]);

class Quote extends Component {
  componentDidMount = () => {
    const {
      match: {
        params: {
          id,
        },
      },
      selectVariantVerbiage,
      verbiage,
    } = this.props;

    if (!verbiage) {
      selectVariantVerbiage(id);
    }
  }

  props: {
    device: string,
    language: string,
    lead: Object,
    leadType: string,
    match: Object,
    selectVariantVerbiage: Function,
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
        <SectionA proxy={proxy} />
        <Footer />
      </Fragment>
    );
  }
}

function mapStateToProps (state) {
  return {
    device: state.device,
    language: state.language,
    lead: state.lead,
    leadType: state.leadType,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectVariantVerbiage: selectVariantVerbiageAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Quote)));
