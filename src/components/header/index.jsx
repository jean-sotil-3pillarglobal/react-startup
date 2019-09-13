
import classNames from 'classnames';
import Headroom from 'react-headroom';
import React, { Component } from 'react';

import {
  AppBar,
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
import Icon from './../commons/icon';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.utils.darker}`,
    padding: `${theme.spacing.unit * 1}px 0`,
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
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    margin: 0,
    padding: `${theme.spacing.unit * 1}px 0`,
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
    marginLeft: theme.spacing.unit * 5,
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
    fontSize: '1rem',
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
  root: {
    '& div[class*="headroom--pinned"] *': {
      color: theme.palette.secondary.contrastText,
    },
    '& div[class*="headroom--pinned"] button[class*="MuiButton-outlined"]': {
      '&:hover': {
        background: theme.palette.primary.main,
      },
      '&:hover span': {
        color: theme.palette.primary.contrastText,
      },
      backgroundColor: theme.palette.secondary.light,
    },
    '& div[class*="headroom--pinned"] header': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: `${theme.palette.secondary.light}`,
    },
    '& div[class*="headroom--unfixed"] button[class*="MuiButton-outlined"]': {
      '&:hover': {
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
      },
    },
    '& div[class*="headroom-wrapper"] > div': {
      zIndex: '10!important',
    },
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'header';
// copy:
// 1 title
// 4 items
// 1 cta
const copy = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'title',
  'publics-4-featured',
  'publics-4-featured_icon',
  'publics-4-label',
  'publics-4-route',
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

  props: {
    classes: Object,
    proxy: Object,
    theme: Object,
  };

  render() {
    const { classes, proxy, theme } = this.props;
    const { device, verbiage } = proxy;
    const { open } = this.state;
    const isMobile = device === 'mobile';

    return (
      verbiage &&
      <div className={classes.root}>
        <CssBaseline />
        <Headroom
          className={classes.headroom}
          onPin={() => console.log('pinned')}
          onUnpin={() => console.log('unpinned')}>
          <AppBar
            position="relative"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}>
            <Toolbar disableGutters={!open}>
              {isMobile ?
                <IconButton
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}>
                  <Menu />
                </IconButton> : null
              }

              <Typography variant="body2" align="left" className={classes.h3}>
                <LangToggler id={copy.title} />
              </Typography>

              {(!open && !isMobile) &&
                <Grid
                  container
                  spacing={16}
                  direction="row"
                  justify="flex-end"
                  alignItems="center">
                  {copy.publics.map((item) => {
                    const featured = verbiage(item.featured);
                    return (
                      <Grid item md={2} align="center" key={item.label}>
                        <LangButton
                          lang={item.label}
                          variant={featured && VARIANTS.OUTLINED}
                          typeButton={(featured && TYPES.SECONDARY) || TYPES.LINK}
                          pos="left">
                          {featured &&
                            <Icon name={verbiage(item.featured_icon)} className={classes.icon} />
                          }
                        </LangButton>
                      </Grid>
                    );
                  })}
                </Grid>
              }
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

export default withStyles(styles, { withTheme: true })(Header);
