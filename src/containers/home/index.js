import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from './section-1';
import Products from './section-2';

const styles = theme => ({
  container: {
    margin: 0,
  },
});

class Home extends Component {
  render () {
    const { classes } = this.props;
    return (
      <Fragment>
        <Header />
        <Hero />
        <Products />
        <Footer />
      </Fragment>
    );
  }
}

export default connect(null, null)(withStyles(styles)(Home));
