import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

import Copyright from '@material-ui/icons/Copyright';

// action creators
import selectLanguageAction from '../../store/actions/components/footer';

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
  render () {
    let defaultLanguage = 'es';

    if (this.props.selectedLanguage) {
      defaultLanguage = this.props.selectedLanguage;
    }

    return (
      <Grid container spacing={24} className={classNames(this.props.classes.container)}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={16} alignItems='flex-start' display='center' justify='center'>
            <Grid item xs={12} sm={8} md={10}>
              <Grid container spacing={16} alignItems='flex-end' display='center' justify='center'>
                <Grid item xs={12} sm={3} md={2}>
                  <Button className={this.props.classes.button} align="center">
                    <Typography className={this.props.classes.links} color='inherit' variant='body1' align='center'>
                      About
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                  <Button className={this.props.classes.button} align="center">
                    <Typography className={this.props.classes.links} variant='body1' align='center'>
                      Features
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                  <Button className={this.props.classes.button} align="center">
                    <Typography className={this.props.classes.links} variant='body1' align='center'>
                      Contact Sales
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                  <Button className={this.props.classes.button} align="center">
                    <Typography className={this.props.classes.links} variant='body1' align='center'>
                      Privacy
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <div className={this.props.classes.social}>
                    <a href="#">
                      <span className="screen-reader-text">Facebook</span>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFFFFF"/>
                      </svg>
                    </a>
                    <a href="#">
                      <span className="screen-reader-text">Twitter</span>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFFFFF"/>
                      </svg>
                    </a>
                    <a href="#">
                      <span className="screen-reader-text">Google</span>
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFFFFF"/>
                      </svg>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} align="center">
                  <select
                    onChange={evt => this.props.selectLanguage(evt) }
                    value={defaultLanguage}>
                    <option value="es">es</option>
                    <option value="en">en</option>
                  </select>
                </Grid>s
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={2} className={classNames(this.props.classes.light)}>
              <Typography className={classNames(this.props.classes.padding, this.props.classes.footer)} color='inherit' variant='body1' align='right'><Copyright className={this.props.classes.icon}/> 2018 Adfy</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    selectedLanguage: state.selectedLanguage,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectLanguage: selectLanguageAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Footer));
