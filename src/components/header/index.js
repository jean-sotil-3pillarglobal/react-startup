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
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Search as MenuSearch,
} from '@material-ui/icons';

// fetchWeatherAction
import { fetchWeatherAction } from '../../store/actions/components/header';

// provider
import LangToggler from '../../providers/lang/toggler';

const styles = theme => ({
  appBar: {
    padding: theme.spacing.unit * 2,
  },
  grow: {
    flexGrow: 1,
  },
  label: {
    color: theme.palette.primary.light,
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
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid container
              spacing={16}
              direction="row"
              alignItems="center"
              justify="center">

              <Grid item xs={6} sm={1} md={1} align="center">
                <IconButton className={classes.menuButton} color="secondary" aria-label="Menu" align="center">
                  <MenuIcon align="center" />
                </IconButton>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Typography variant="h2" color="secondary" noWrap>
                  Adify
                  <Typography className={classes.label} component="p" color="primary">
                    <LangToggler id="components.header.caption"></LangToggler>
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={5} md={5} align="right">
                <Button size="medium" className={classes.label}>
                  <LangToggler id="components.header.cta-learn"></LangToggler>
                </Button>
                <Button size="medium" variant="outlined" color="secondary">
                  <LangToggler id="components.header.cta-sign"></LangToggler>
                </Button>
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
