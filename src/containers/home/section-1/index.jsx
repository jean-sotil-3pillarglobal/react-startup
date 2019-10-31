
import { Parallax } from 'react-parallax';
import { Section } from 'react-scroll-section';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

import { LangButton } from './../../../components/commons/button';
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
    width: '60%',
    zIndex: 1,
  },
  content: {
    marginTop: theme.spacing(10),
    width: '100%',
  },
  hero: {
    background: 'transparent',
    height: 600,
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
const copy = LangGenerateTree([NODE, SLOT], [
  'background',
  'cta',
  'id',
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
      <Section id={verbiage(copy.id)}>
        <Parallax bgImage={verbiage(copy.background)} strength={500} className={classes.background}>
          <Paper
            container
            className={classes.hero}>
            <Callout
              title={copy.title}
              subtitle={copy.subtitle}
              variant="light"
              className={classes.callout}>
              <LangButton
                className={classes.button}
                lang={copy.cta}
                onClick={this.handleClick}
                variant="dark2">
                <Icon name="keyboard_arrow_right" className={classes.icon} />
              </LangButton>
            </Callout>
          </Paper>
        </Parallax>
      </Section>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
