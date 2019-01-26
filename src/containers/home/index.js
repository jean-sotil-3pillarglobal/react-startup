import { bindActionCreators } from 'redux';
import { Component } from 'react';
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

import Async from '../async-component';
import Footer from '../../components/footer';
import Header from '../../components/header';

// components
const PreLoader = Async(() => import('../../components/commons/preloader').then(module => module.default), {});

const styles = theme => ({
  hero: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  heroContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

class Home extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className="container">
        <PreLoader />
        <Header />
        <Paper className={classes.hero}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={24}>
            <Grid item md={6}>
              <div className={classes.heroContent}>
                <Typography variant="h2" color="inherit" gutterBottom>
                  Title of a longer featured blog post
                </Typography>
                <Typography color="inherit" paragraph>
                  Multiple lines of text that form the lede, informing new readers quickly and
                  efficiently about what&apos;s most interesting in this post&apos;s contents…
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <Paper className={classes.quote}>
                <Typography variant="h3" color="primary" gutterBottom>
                  Get Your Quote Now
                </Typography>
                <Typography variant="body2" color="primary" paragraph>
                  Select A Product To Get a Quote
                </Typography>
                <FormControl className={classes.formControl}>
                  <Select
                    value='auto'
                    inputProps={{
                      id: 'type',
                      name: 'type',
                    }}
                  >
                    <MenuItem value={'auto'}>Auto</MenuItem>
                    <MenuItem value={'health'}>Health</MenuItem>
                    <MenuItem value={'dental'}>Dental</MenuItem>
                    <MenuItem value={'home'}>Homeowners</MenuItem>
                    <MenuItem value={'renters'}>Renters</MenuItem>
                    <MenuItem value={'life'}>Life</MenuItem>
                    <MenuItem value={'medicare'}>Medicare</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default connect(null, null)(withStyles(styles)(Home));
