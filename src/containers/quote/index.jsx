import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  withStyles,
} from '@material-ui/core';

import Helmet from '../../components/commons/helmet/index.jsx';
import Footer from '../../components/footer/index.jsx';
import SectionA from './section-1/index.jsx';

// provider
import LangToggler from './../../providers/lang/toggler';
import LangGenerateTree from './../../providers/utils/lang.generate.tree';
import LangGenerateId from './../../providers/utils/lang.generate.id';

import {
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

const styles = theme => ({
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
  props: {
    classes: Object,
    history: any,
    verbiage: Function,
  }

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

  render () {
    const { classes, lead, leadType, verbiage, language, device } = this.props;
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
