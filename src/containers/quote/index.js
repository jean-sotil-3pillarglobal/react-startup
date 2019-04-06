import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  withStyles,
} from '@material-ui/core';

import Footer from '../../components/footer';
import Header from '../../components/header';
import SectionA from './section-1';

const styles = theme => ({
  container: {
    margin: 0,
  },
});

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
        <SectionA proxy={proxy} />
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
