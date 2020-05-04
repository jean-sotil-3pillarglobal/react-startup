
import { connect } from 'react-redux';
import classnames from 'classnames';
import React, { Component, Fragment } from 'react';

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

import { Link } from 'react-scroll';

// provider
import LangToggler from '../../providers/lang/toggler';
import LangGenerateTree from '../../providers/utils/lang.generate.tree';
import ThemeBackground from './../../providers/utils/theme.background';
import ThemeColor from './../../providers/utils/theme.color';

// components
import { LangButton, TYPES } from './../commons/button';
import SmartImg from './../commons/img';
import Icon from './../commons/icon';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: ThemeBackground({ variant: 'primary' }, theme, 'light'),
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
  back: {
    background: ThemeBackground({ variant: 'primary' }, theme, 'light'),
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
    '&:hover': {
      background: ThemeBackground({ variant: 'primary' }, theme, 'dark'),
    },
    background: ThemeBackground({ variant: 'primary' }, theme),
  },
  h3: {
    color: theme.palette.primary.contrastText,
    marginBottom: 0,
  },
  hide: {
    display: 'none',
  },
  iconFab: {
    color: ThemeColor({ variant: 'primary' }, theme),
    fontSize: '1rem',
  },
  logo: {
    display: 'block',
    margin: '0 0 0 auto',
    width: 48,
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
    padding: 0,
  },
  phone: () => ({
    color: theme.palette.utils.hightlight,
    marginRight: theme.spacing(1),
  }),
  root: () => ({}),
  socialButtons: {
    padding: 0,
  },
  socialButtonsFixed: {
    display: 'block',
    position: 'fixed',
    right: theme.spacing(3),
    top: theme.spacing(14),
    zIndex: 999,
  },
  toolbar: {
    margin: '0 auto',
    maxWidth: 1240,
    width: '100%',
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
  'back',
  'featured-1-id',
  'featured-1-label',
  'featured-1-route',
  'logo',
  'phone_icon',
  'phone',
  'publics-3-id',
  'publics-3-label',
  'publics-3-route',
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
    category: Object,
    classes: Object,
    device: String,
    theme: Object,
    verbiage: Object,
  };

  render() {
    const {
      category,
      classes,
      device,
      verbiage,
      theme,
    } = this.props;

    const proxy = {
      category,
      device,
      verbiage,
    };

    const { open } = this.state;
    const isMobile = device === 'mobile';

    return (
      verbiage &&
      <div className={classes.root}>
        <CssBaseline />
        <Grid
          container
          alignItems="flex-start"
          direction="row"
          justify="flex-start"
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
                <Box key={item.label} p={2}>
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
        <AppBar
          position="fixed"
          className={classnames(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar variant="dense" disableGutters={!open} className={classes.toolbar}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center">
              <Grid
                item
                sm={10}
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
              {!category && (
                <Fragment>
                  <Grid
                    item
                    sm={12}
                    md={8}
                    lg={8}
                  >
                    {(!open && !isMobile) &&
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        p={1}
                        m={1}
                        className={classes.navbar}>
                        {copy.publics.map((item) => {
                          return (
                            <Link
                              activeClass="active"
                              key={item.id}
                              smooth
                              spy
                              to={verbiage(item.id)}
                            >
                              <Box p={1} className={classes.navbarItem} key={item.id}>
                                <LangButton
                                  key={item.label}
                                  lang={item.label}
                                  pos="right"
                                  typeButton={TYPES.LINK}
                                  variant="light"
                                />
                              </Box>
                            </Link>
                          );
                        })}
                      </Box>
                    }
                  </Grid>
                  <Grid
                    item
                    sm={10}
                    md={3}
                    lg={3}
                  >
                    {(!open && !isMobile) && (
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-end"
                        p={1}
                        m={1}
                        className={classes.navbar}>
                        {copy.featured.map((featured) => {
                          return (
                            <Link
                              activeClass="active"
                              key={featured.id}
                              smooth
                              spy
                              to={verbiage(featured.id)}
                            >
                              <Box p={1} className={classes.navbarItem} key={featured.id}>
                                <LangButton
                                  key={featured.label}
                                  lang={featured.label}
                                  pos="right"
                                  typeButton={TYPES.CONTAINED}
                                  variant="dark"
                                />
                              </Box>
                            </Link>
                          );
                        })}
                      </Box>
                    )}
                  </Grid>
                </Fragment>
              )}
              {category && (
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  p={1}
                  m={1}
                  className={classes.navbar}>
                  <Box p={1} className={classes.navbarItem} key={copy.back}>
                    <LangButton
                      className={classes.back}
                      key={copy.back}
                      lang={copy.back}
                      pos="left"
                      typeButton={TYPES.BUTTON}
                      variant="light"
                    />
                  </Box>
                </Box>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
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
    category: state.category,
    device: state.device,
    verbiage: state.verbiage,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(Header));
