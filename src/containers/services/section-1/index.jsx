import { Parallax } from 'react-parallax';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import React, { Fragment } from 'react';
import Reveal from 'react-reveal/Reveal';

import {
  Grid,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
// import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import SectionBlock from './../../../components/layouts/section';
import SVGComponent from './../../../components/commons/svg';

const variant = 'light2';

const styles = theme => ({
  caption: () => ({
    background: ThemeBackground({ variant }, theme),
    color: ThemeColor({ variant }, theme),
    padding: theme.spacing(4),
  }),
  copy: {
    margin: `0 0 ${theme.spacing(4)}px 0`,
  },
  details: {
    backgroundColor: 'transparent',
    padding: theme.spacing(4),
  },
  headroom: {
    padding: `${theme.spacing(2)}px 0`,
    width: '100%',
  },
  image: {
    background: 'transparent',
    height: 500,
    padding: 0,
    position: 'relative',
    zIndex: 1,
  },
  svg: {
    marginBottom: theme.spacing(2),
  },
  title: {
    padding: `0 0 ${theme.spacing(4)}px 0`,
  },
});

// const NODE = 'services';
// const SLOT = 'section_1';
// // copy:
// const copy = LangGenerateTree([NODE, SLOT], [
//   'back',
//   'promos',
//   'services',
// ]);

function SectionA (props: {
  children: any,
  classes: Object,
  proxy: Object,
  category: Object,
}) {
  const {
    category,
    children,
    classes,
    proxy,
  } = props;

  const {
    language,
  } = proxy;

  return (
    <Fragment>
      <Parallax bgImage={category.background} strength={500} className={classes.background}>
        <Paper className={classes.image} />
      </Parallax>
      <SectionBlock variant="light1">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}>
          <Grid
            item
            sm={12}
            md={7}
            lg={6}>
            <Paper className={classes.details} elevation={0}>
              <Typography
                variant="h2"
                className={classes.title}
              >
                {category.title[language]}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            sm={12}
            md={5}
            lg={6}>
            <Reveal>
              <SVGComponent src={category.svg} color="secondary" className={classes.svg} />
              <Fade>
                {children}
              </Fade>
            </Reveal>
          </Grid>
        </Grid>
      </SectionBlock>
    </Fragment>
  );
}

export default withStyles(styles)(withRouter(SectionA));
