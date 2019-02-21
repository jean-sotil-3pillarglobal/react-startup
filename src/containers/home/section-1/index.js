import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ParallaxBanner } from 'react-scroll-parallax';

import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
import LangGenerateId from './../../../providers/utils/lang.generate.id';

// components
import { BaseButton } from './../../../components/commons/button';

const styles = theme => ({
  button: {
    margin: 0,
  },
  content: {
    padding: `${theme.spacing.unit * 6}px 0 0 0`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  formControl: {
    width: '100%',
  },
  hero: {
    color: theme.palette.common.white,
    minHeight: '595px',
    padding: '0 2em 1em 2em',
  },
  quote: {
    padding: `${theme.spacing.unit * 6}px`,
  },
  subtitle: {
    margin: `${theme.spacing.unit * 5}px 0`,
  },
  title: {
    lineHeight: '66px',
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'hero';
const NODE_TREE = [NODE_ROOT, NODE_TYPE];
// copy
const COPY_TREE = [
  LangGenerateId(NODE_TREE, 'title'),
  LangGenerateId(NODE_TREE, 'subtitle'),
  LangGenerateId(NODE_TREE, 'cta1'),
];

const layers = [
  {
    amount: 0.1,
    image: 'https://foo.com/foo.jpg',
    slowerScrollRate: false,
  },
  {
    amount: 0.2,
    image: 'https://foo.com/bar.png',
    slowerScrollRate: false,
  },
];

class Hero extends Component {
  render () {
    const { classes, selectedLanguage } = this.props;
    return (
      <Fragment>
        <ParallaxBanner
          layers={layers}
          className={classes.hero}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid
              item
              md={8}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid
                  item
                  md={12}
                  className={classes.content}>
                  <Typography variant="h1" align="left" className={classes.title}>
                    <LangToggler id={COPY_TREE[0]}></LangToggler>
                  </Typography>
                  <Typography variant="subtitle2" align="left" className={classes.subtitle}>
                    <LangToggler id={COPY_TREE[1]}></LangToggler>
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={12}>
                  <BaseButton
                    langId={COPY_TREE[2]}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ParallaxBanner>
      </Fragment>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {};
}

export default connect(mapStateToProps, null)(withStyles(styles)(Hero));
