import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  withStyles,
} from '@material-ui/core';

import Helmet from '../../components/commons/helmet/index.jsx';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

import BannerA from './banner-1/index.jsx';
import SectionA from './section-1/index.jsx';
import SectionB from './section-2/index.jsx';
import SectionC from './section-3/index.jsx';
import SectionD from './section-4/index.jsx';


// provider
import LangToggler from './../../providers/lang/toggler';
import LangGenerateTree from './../../providers/utils/lang.generate.tree';
import LangGenerateId from './../../providers/utils/lang.generate.id';

const styles = theme => ({
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
        <Header proxy={proxy} />
        <SectionA proxy={proxy} />
        <BannerA proxy={proxy} />
        <SectionB proxy={proxy} />
        <SectionC proxy={proxy} />
        <SectionD proxy={proxy} />
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
