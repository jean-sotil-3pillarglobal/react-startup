
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import LangGenerateId from '../../providers/utils/lang.generate.id';

// components
import { LangButton, TYPES, VARIANTS } from './../commons/button';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: theme.palette.background.main,
    padding: '0',
    transition: theme.transitions.create(['margin', 'width'], {
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
  content: {
    flexGrow: 1,
    marginLeft: -drawerWidth,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
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
    width: drawerWidth,
  },
  h3: {
    marginBottom: 0,
    marginLeft: theme.spacing.unit * 5,
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  root: {
    display: 'flex',
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'header';
// copy:
// 1 title
// 4 items
// 1 cta
const copyTree = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'title',
  'items-3-name',
  'items-3-link',
  'cta-1-name',
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

  render() {
    const { classes, proxy, theme } = this.props;
    const { device } = proxy;
    const { open } = this.state;
    const isMobile = device === 'mobile';

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
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

            <Typography variant="h4" align="left" className={classes.h3}>
              <LangToggler id={copyTree.title} />
            </Typography>

            {(!open && !isMobile) &&
              <Grid container
                spacing={16}
                direction="row"
                justify="flex-end"
                alignItems="center">
                {copyTree.items.map((item) => {
                  return (
                    <Grid item md={2} align="center" key={item.name}>
                      <LangButton
                        lang={item.name}
                        typeButton={TYPES.LINK} />
                    </Grid>
                  );
                })}
                {copyTree.cta.map((item) => {
                  return (
                    <Grid item md={2} align="center" key={item.name}>
                      <LangButton
                        variant={VARIANTS.OUTLINED}
                        typeButton={TYPES.SECONDARY}
                        lang={item.name}/>
                    </Grid>
                  );
                })}
              </Grid>
            }
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {copyTree.items.map(item => (
              <ListItem button key={item.name}>
                <LangToggler id={item.name}></LangToggler>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  proxy: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
