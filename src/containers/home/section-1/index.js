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

// components
import { BaseButton } from './../../../components/commons/button';

const styles = theme => ({
  button: {
    margin: 0,
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
  heroContent: {
    padding: `${theme.spacing.unit * 6}px 0 0 0`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  quote: {
    padding: `${theme.spacing.unit * 6}px`,
  },
});

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
                className={classes.heroContent}>
                <Typography variant="h2" gutterBottom align="left">
                  <LangToggler id="components.hero.title"></LangToggler>
                </Typography>
                <Typography paragraph align="left">
                  <LangToggler id="components.hero.subtitle"></LangToggler>
                </Typography>
              </Grid>
              <Grid
                item
                md={12}>
                <BaseButton
                  langId='components.hero.cta1'/>
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
  return {
    selectedLanguage: state.selectedLanguage,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Hero));
