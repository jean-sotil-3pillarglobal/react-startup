
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

import Callout from './../../../components/commons/callout/';

const styles = theme => ({
  background: {},
  button: {
    margin: 0,
  },
  callout: {
    bottom: theme.spacing(4),
    left: theme.spacing(4),
    position: 'absolute',
    zIndex: 1,
  },
  content: {
    marginTop: theme.spacing(10),
    width: '100%',
  },
  hero: {
    background: 'transparent',
    height: 700,
    padding: 0,
    position: 'relative',
    zIndex: 1,
  },
  icon: {
    fontSize: '1rem',
  },
  image: {
    width: '100%',
    zIndex: -1,
  },
});


const NODE = 'home';
const SLOT = 'section_1';
// copy:
// 1 title
// 1 subtitle
// 1 cta
// 2 images
const copy = LangGenerateTree([NODE, SLOT], [
  'background',
  'subtitle',
  'title',
]);

class SectionA extends Component {
  props: {
    classes: Object,
    proxy: Object,
  }

  render () {
    const { classes, proxy } = this.props;
    const { verbiage } = proxy;

    return (
      verbiage &&
      <Parallax bgImage={verbiage(copy.background)} strength={500} className={classes.background}>
        <Paper className={classes.hero}>
          <Callout
            title={<LangToggler id={copy.title} />}
            subtitle={<LangToggler id={copy.subtitle} />}
            variant="secondary"
            className={classes.callout} />
        </Paper>
      </Parallax>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
