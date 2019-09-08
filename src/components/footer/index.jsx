import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Grid,
  withStyles,
} from '@material-ui/core';

// action creators
import { selectLanguageAction } from '../../store/actions/components/footer';

const styles = theme => ({
  button: {},
  container: {
    margin: '0 -24px 0 0',
    width: '100%',
  },
  dark: {
    background: theme.palette.primary.footer,
  },
  fixed: {
    background: 'linear-gradient(0deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%)',
    bottom: 0,
    position: 'fixed',
    top: 'auto',
    zIndex: 1350,
  },
  footer: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.6em',
      textAlign: 'center',
    },
  },
  icon: {
    fontSize: '16px',
    verticalAlign: 'text-bottom',
  },
  img: {
    height: '38px',
    margin: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px`,
    width: '38px',
  },
  links: {
    color: theme.palette.primary.constrastText,
    paddingTop: `${theme.spacing.unit * 1}px`,
    [theme.breakpoints.down('xs')]: {
      fontSize: '.7em',
    },
  },
  padding: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  relative: {
    color: 'white',
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
  },
});

class Footer extends Component {
  state = {
    defaultLang: 'es',
  }

  componentDidMount = () => {
    const { language, selectLanguage } = this.props;
    const { defaultLang } = this.state;

    if (!language) {
      selectLanguage(defaultLang);
    }
  }

  handleChange = (evt) => {
    const { selectLanguage } = this.props;
    const { target } = evt;
    const { value } = target;

    this.setState({
      defaultLang: value,
    });

    // set language globally
    selectLanguage(value);
  }

  render () {
    const { defaultLang } = this.state;

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} align="center">
          <select
            onChange={this.handleChange}
            value={defaultLang}>
            <option value="es">es</option>
            <option value="en">en</option>
          </select>
        </Grid>
      </Grid>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    language: state.selectedLanguage,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectLanguage: selectLanguageAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Footer));
