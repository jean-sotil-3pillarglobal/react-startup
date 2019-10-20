
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

// components
import { LangButton, TYPES, VARIANTS } from './../commons/button';
import { SmartImg } from './../commons/img';
import Icon from './../commons/icon';

// action creators
import { setHeaderVisibilityAction } from '../../store/actions/components/header';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.light}`,
    padding: 0,
    transition: theme.transitions.create(['background-color', 'margin', 'width'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
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
    padding: theme.spacing(3),
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
  iconFab: {
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
  },
  logo: {
    display: 'block',
    margin: `${theme.spacing(1)}px auto`,
    width: '70%',
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
  },
  phone: {
    color: `${theme.palette.secondary.contrastText}!important`,
    marginRight: theme.spacing(1),
  },
  root: {
    '& div[class*="headroom--pinned"] *': {
      color: theme.palette.secondary.contrastText,
    },
    '& div[class*="headroom--pinned"] header': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: `${theme.palette.secondary.light}`,
    },
    '& div[class*="headroom--unpinned"]': {
      transition: 'none !important',
    },
    '& div[class*="headroom-wrapper"] > div': {
      zIndex: '10!important',
    },
  },
  socialButtons: {
    margin: 0,
    padding: 0,
  },
  socialButtonsFixed: {
    display: 'block',
    position: 'fixed',
    right: theme.spacing(2),
    top: '33%',
    zIndex: 999,
  },
  topHeader: {
    background: theme.palette.secondary.main,
    padding: `0 ${theme.spacing(2)}px`,
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'header';
// copy:
// 1 title
// 4 items
// 1 cta
const copy = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'logo',
  'phone',
  'phone_icon',
  'publics-4-featured_icon',
  'publics-4-featured',
  'publics-4-label',
  'publics-4-route',
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
            sm={6}
            md={6}
            lg={6}>
            <LangButton
              lang={copy.phone}
              typeButton={TYPES.LINK}
              className={classes.phone}>
              <Icon name={verbiage(copy.phone_icon)} className={classnames(classes.icon, classes.phone)} />
            </LangButton>
          </Grid>
          <Grid
            item
            sm={6}
            md={6}
            lg={6}>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1} className={classnames(classes.socialButtons, !isHeaderVisible && classes.socialButtonsFixed)}>
              {copy.social.map(item => (
                <Box key={item.label} p={1}>
                  <LangButton
                    href={verbiage(item.link)}
                    key={item.label}
                    lang={item.label}
                    variant={VARIANTS.FAB}>
                    <Icon name={verbiage(item.label)} className={classes.iconFab} />
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
                justify="space-between"
                alignItems="center">
                <Grid
                  item
                  sm={12}
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
                  <SmartImg proxy={proxy} src={copy.logo} className={classes.logo} />
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
                          <Box key={item.label} p={1}>
                            <LangButton
                              key={item.label}
                              lang={item.label}
                              variant={featured && VARIANTS.OUTLINED}
                              typeButton={(featured && TYPES.SECONDARY) || TYPES.LINK}
                              pos="right">
                              {featured &&
                                <Icon name={verbiage(item.featured_icon)} className={classes.icon} />
                              }
                            </LangButton>
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
