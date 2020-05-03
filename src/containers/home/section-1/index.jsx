
import { Parallax } from 'react-parallax';
import { withRouter } from 'react-router-dom';
import React from 'react';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

import { Link } from 'react-scroll';

import { constants } from './../../../providers/config';

import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

import { TYPES } from './../../../components/commons/button';
import Callout from './../../../components/commons/callout/';
import LangButtonAnimate from './../../../components/commons/button/animate';
import SmartImg from './../../../components/commons/img';
import SVGComponent from './../../../components/commons/svg';

const styles = (theme) => ({
  background: {
    left: 0,
    paddingTop: theme.spacing(12),
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -2,
  },
  button: {
    margin: '0 auto',
  },
  callout: {
    background: 'transparent',
    display: 'inline-block',
    textAlign: 'center',
    width: '70%',
    zIndex: 999,
  },
  content: {
    marginTop: theme.spacing(10),
    width: '100%',
  },
  hero: {
    background: theme.palette.primary.main,
    overflow: 'hidden',
    padding: 0,
    position: 'relative',
    textAlign: 'center',
    zIndex: 0,
  },
  icon: {
    lineHeight: 0,
  },
  logo: {
    display: 'block',
    margin: '0 auto',
    width: 300,
    zIndex: 999,
  },
  svg: {
    bottom: '-10%',
    position: 'absolute',
    right: 0,
    width: '50%',
    zIndex: -1,
  },
});


const NODE = 'home';
const SLOT = 'section_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'background_show',
  'background',
  'cta',
  'id',
  'logo',
  'subtitle',
  'svg_show',
  'svg',
  'title',
]);

function SectionA (props: {
  classes: Object,
  proxy: Object,
}) {
  const { classes, proxy } = props;
  const { verbiage } = proxy;

  return (
    verbiage && (
      <Paper
        container="true"
        className={classes.hero}
        elevation={0}>
        {verbiage(copy.svg_show) && <SVGComponent src={verbiage(copy.svg)} className={classes.svg} variant="primary" />}
        {verbiage(copy.background_show) && (
          <Parallax bgImage={verbiage(copy.background)} strength={200} className={classes.background}>
            <SmartImg proxy={proxy} src={verbiage(copy.logo)} className={classes.logo} />
            <Callout
              align="center"
              title={copy.title}
              subtitle={copy.subtitle}
              variant="light"
              className={classes.callout}>
              <Link
                activeClass="active"
                smooth
                spy
                to={constants.LINK_SERVICES_1}
              >
                <LangButtonAnimate
                  color="white"
                  iconClassName={classes.icon}
                  iconx="arrowDown"
                  icony="fwd"
                  lang={copy.cta}
                  size={20}
                  typeButton={TYPES.BUTTON}
                  variant="dark2"
                />
              </Link>
            </Callout>
          </Parallax>
        )}
      </Paper>
    )
  );
};

export default withStyles(styles)(withRouter(SectionA));
