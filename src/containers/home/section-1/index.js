import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

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
import LangYields from './../../../providers/utils/lang.yields';

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
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    minHeight: '595px',
    padding: '0 2em 1em 2em',
  },
  quote: {
    padding: `${theme.spacing.unit * 6}px`,
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

class Hero extends Component {
  render () {
    const { classes, selectedLanguage } = this.props;
    return (
      <Fragment>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.hero}>
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
                <Typography variant="h1" gutterBottom align="left">
                  <LangToggler id={COPY_TREE[0]}></LangToggler>
                </Typography>
                <Typography paragraph align="left">
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
      </Fragment>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {};
}

export default connect(mapStateToProps, null)(withStyles(styles)(Hero));
