import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  Typography,
  withStyles,
} from '@material-ui/core';

import Footer from '../../components/footer/index.jsx';

// provider
import LangToggler from './../../providers/lang/toggler';
import LangGenerateTree from './../../providers/utils/lang.generate.tree';
import LangGenerateId from './../../providers/utils/lang.generate.id';

const styles = theme => ({
  container: {
    margin: 0,
  },
});

const NODE = 'err404';
const SLOT = 'index';
// copy:
// 1 title
const copy = LangGenerateTree([NODE, SLOT], [
  'title',
]);

class Page404 extends Component {
  props: {
    classes: Object,
    history: any,
  }

  render () {
    const { classes, location } = this.props;
    return (
      <Fragment>
        <Typography variant="h1" align="left" className={classes.title}>
          <LangToggler id={copy.title}></LangToggler> PATH: {location.pathname}
        </Typography>
        <Footer />
      </Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(Page404));
