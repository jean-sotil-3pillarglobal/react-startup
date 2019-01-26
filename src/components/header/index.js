import classNames from 'classnames';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  AppBar,
  Button,
  fade,
  Grid,
  IconButton,
  InputBase,
  Link,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

// fetchWeatherAction
import { fetchWeatherAction } from '../../store/actions/components/header';

// provider
import LangToggler from '../../providers/lang/toggler';

const styles = theme => ({
  bar: {
    backgroundColor: '#ffffff',
  },
  grow: {
    flexGrow: 1,
  },
  label: {
    color: theme.palette.primary.contrastText,
  },
  logo: {
    width: '100%',
  },
  menuButton: {},
  paper: {
    height: 140,
    width: 100,
  },
  root: {
    flexGrow: 1,
    width: '100%',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class Header extends Component {
  constructor (props) {
    super(props);

    // state model
    this.state = {
      term: '',
    };

    // todo: add debounce
    // proxies - on[el][e]
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.root, classes.grow)}>
        <AppBar position="static" className={classes.bar}>
          <Toolbar className={classes.toolbar}>
            <Grid container
              spacing={16}
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={10} sm={8} md={8} align="center">
                <Grid container
                  spacing={16}
                  direction="row"
                  justify="center"
                  alignItems="flex-end">
                  <Grid item md={3} align="center">
                    <Button
                      component='a'
                      color='primary'
                      className={classes.button}
                      fullWidth>
                      <LangToggler id="components.header.btn-nav-1"></LangToggler>
                    </Button>
                  </Grid>
                  <Grid item md={3} align="center">
                    <Button
                      color='primary'
                      className={classes.button}
                      fullWidth>
                      <LangToggler id="components.header.btn-nav-2"></LangToggler>
                    </Button>
                  </Grid>
                  <Grid item md={3} align="center">
                    <Button
                      color='primary'
                      className={classes.button}
                      fullWidth>
                      <LangToggler id="components.header.btn-nav-3"></LangToggler>
                    </Button>
                  </Grid>
                  <Grid item md={3} align="center">
                    <Button
                      color='primary'
                      className={classes.button}
                      fullWidth>
                      <LangToggler id="components.header.btn-nav-4"></LangToggler>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  onInputChange (evt) {
    this.setState({ term: evt.target.value });
  }

  onFormSubmit (evt) {
    evt.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeatherAction,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));
