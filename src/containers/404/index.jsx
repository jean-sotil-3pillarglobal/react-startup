import { withRouter } from 'react-router-dom';
import React, { Fragment } from 'react';

import {
  Typography,
  withStyles,
} from '@material-ui/core';

import Footer from '../../components/footer';

// provider
import LangToggler from './../../providers/lang/toggler';
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

const styles = () => ({
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

function Page404 (props: {
  classes: Object,
  location: Object,
}) {
  const {
    classes,
    location,
  } = props;

  return (
    <Fragment>
      <Typography variant="h1" align="left" className={classes.title}>
        <LangToggler id={copy.title} /> PATH: {location.pathname}
      </Typography>
      <Footer />
    </Fragment>
  );
}

export default withStyles(styles)(withRouter(Page404));
