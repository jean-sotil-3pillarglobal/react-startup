
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Headroom from 'react-headroom';
import React, { Component } from 'react';

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import {
  ChevronLeft,
  ChevronRight,
  Menu,
} from '@material-ui/icons';

// provider
import LangToggler from '../../providers/lang/toggler';
import LangGenerateTree from '../../providers/utils/lang.generate.tree';
import ThemeBackground from './../../providers/utils/theme.background';
import ThemeColor from './../../providers/utils/theme.color';

// components
import { LangButton, TYPES } from './../commons/button';
import SmartImg from './../commons/img';
import Icon from './../commons/icon';

// action creators
import { setHeaderVisibilityAction } from '../../store/actions/components/header';

const drawerWidth = 240;

const styles = theme => ({
  appBar: props => ({
    background: ThemeBackground(!props.isHeaderVisible ? { variant: 'secondary' } : { variant: 'primary' }, theme, 'light'),
    padding: 0,
    transition: theme.transitions.create(['background-color', 'margin', 'width'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  }),
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  burger: {
    color: theme.palette.secondary.contrastText,
  },
  content: {
    flexGrow: 1,
    marginLeft: -drawerWidth,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    margin: 0,
    padding: `${theme.spacing(1)}px 0`,
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  drawerPaper: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    width: drawerWidth,
  },
  fab: {
    background: ThemeColor({ variant: 'secondary' }, theme),
  },
  h3: {
    color: theme.palette.primary.contrastText,
    marginBottom: 0,
  },
  headroom: {
    height: 'auto!important',
    overflow: 'hidden',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
  icon: {
    color: theme.palette.secondary.contrastText,
    fontSize: '1rem',
  },
  iconFab: props => ({
    color: ThemeColor(props.isHeaderVisible ? { variant: 'primary' } : { variant: 'secondary' }, theme),
    fontSize: '1rem',
  }),
  logo: {
    display: 'block',
    margin: 0,
    width: '50%',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  menuItem: {
    backgroundColor: theme.palette.secondary.dark,
  },
  menuLabel: {
    color: theme.palette.secondary.contrastText,
  },
  navbar: {
    background: 'transparent',
    float: 'right',
    padding: 0,
  },
  phone: () => ({
    color: ThemeColor({ variant: 'secondary' }, theme),
    marginRight: theme.spacing(1),
  }),
  root: () => ({
    '& div[class*="headroom-wrapper"] > div': {
      zIndex: '10!important',
    },
  }),
  socialButtons: {
    padding: 0,
  },
  socialButtonsFixed: {
    display: 'block',
    position: 'fixed',
    right: theme.spacing(1),
    top: '33%',
    zIndex: 999,
  },
  topHeader: {
    padding: `0 ${theme.spacing(8)}px`,
  },
  topHeaderSocial: {
    margin: 0,
    padding: 0,
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'header';
// copy:
const copy = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'logo',
  'phone_icon',
  'phone',
  'publics-5-featured_icon',
  'publics-5-featured',
  'publics-5-id',
  'publics-5-label',
  'publics-5-route',
  'social-3-icon',
  'social-3-label',
  'social-3-link',
  'title',
]);

class Header extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleFabClick = (link) => {
    console.log(link);
  };

  props: {
    classes: Object,
    isHeaderVisible: Boolean,
    proxy: Object,
    setHeaderVisibility: Function,
    theme: Object,
  };

  render() {
    const {
      classes,
      isHeaderVisible,
      proxy,
      setHeaderVisibility,
      theme,
    } = this.props;

    const { device, verbiage } = proxy;
    const { open } = this.state;
    const isMobile = device === 'mobile';

    return (
      verbiage &&
      <div className={classes.root}>
        <CssBaseline />
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="center"
          className={classes.topHeader}>
          <Grid
            item
            sm={12}
            md={9}
            lg={9}
            className={classes.socialButtons}
          >
            <Box display="flex" flexDirection="row" justifyContent="flex-end" p={1} m={1} className={classnames(classes.topHeaderSocial, classes.socialButtonsFixed)}>
              {copy.social.map(item => (
                <Box key={item.label} p={1}>
                  <LangButton
                    href={verbiage(item.link)}
                    key={item.label}
                    typeButton={TYPES.FAB}
                    variant="primary"
                    className={classes.fab}
                  >
                    <Icon image={verbiage(item.icon)} className={classes.iconFab} />
                  </LangButton>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Headroom
          className={classes.headroom}
          onUnpin={() => setHeaderVisibility(false)}
          onUnfix={() => setHeaderVisibility(true)}>
          <AppBar
            position="relative"
            className={classnames(classes.appBar, {
              [classes.appBarShift]: open,
            })}>
            <Toolbar disableGutters={!open}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid
                  item
                  sm={2}
                  md={1}
                  lg={1}>
                  {isMobile ?
                    <IconButton
                      aria-label="Open drawer"
                      onClick={this.handleDrawerOpen}
                      className={classnames(classes.menuButton, open && classes.hide)}>
                      <Menu />
                    </IconButton> : null
                  }
                  <SmartImg proxy={proxy} src={verbiage(copy.logo)} className={classes.logo} />
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={10}
                  lg={10}>
                  {(!open && !isMobile) &&
                    <Box
                      display="flex"
                      flexDirection="row"
                      p={1}
                      m={1}
                      alignItems="center"
                      className={classes.navbar}>
                      {copy.publics.map((item) => {
                        const featured = verbiage(item.featured);

                        return (
                          <Box p={1} className={classes.navbarItem} key={item.id}>
                            <LangButton
                              key={item.label}
                              lang={item.label}
                              pos="right"
                              typeButton={(featured && TYPES.CONTAINED) || TYPES.LINK}
                              variant={(isHeaderVisible && 'light') || 'light2'}
                            />
                          </Box>
                        );
                      })}
                    </Box>
                  }
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Headroom>
        {isMobile &&
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose} className={classes.burger}>
                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>
            </div>
            <Divider className={classes.divider} />
            <List>
              {copy.publics.map(item => (
                <ListItem button key={item.label} className={classes.menuItem}>
                  <Typography variant="body1" component="span" className={classes.menuLabel}>
                    <LangToggler id={item.label} />
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Drawer>
        }
      </div>

    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    isHeaderVisible: state.isHeaderVisible,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setHeaderVisibility: setHeaderVisibilityAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Header));
