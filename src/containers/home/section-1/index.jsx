
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import {
  Grid,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

import { LangButton, TYPES, VARIANTS } from './../../../components/commons/button';
import Callout from './../../../components/commons/callout/';
import Icon from './../../../components/commons/icon';

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
  'cta',
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
        <Grid
          container
          className={classes.hero}>
          <Grid
            item
            sm={4}
            md={4}
            lg={4}>
            <Callout
              title={copy.title}
              subtitle={copy.subtitle}
              variant="secondary"
              className={classes.callout}>
              <LangButton
                className={classes.button}
                lang={copy.cta}
                onClick={this.handleClick}
                variant={VARIANTS.OUTLINED}
                typeButton={TYPES.PRIMARY}>
                <Icon name="keyboard_arrow_right" className={classes.icon} />
              </LangButton>
            </Callout>
          </Grid>
        </Grid>
      </Parallax>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
