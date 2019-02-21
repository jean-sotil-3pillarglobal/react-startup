
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

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
import LangGenerateId from '../../providers/utils/lang.generate.id';

// components
import PreLoader from './../commons/preloader';
import { BaseButton, TYPES } from './../commons/button';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: theme.palette.background.light,
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
const NODE_TREE = [NODE_ROOT, NODE_TYPE];
// copy
const COPY_TREE = [
  LangGenerateId(NODE_TREE, 'nav1'),
  LangGenerateId(NODE_TREE, 'nav2'),
  LangGenerateId(NODE_TREE, 'nav3'),
  LangGenerateId(NODE_TREE, 'nav4'),
  LangGenerateId(NODE_TREE, 'label'),
];

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
    const { classes, theme, device } = this.props;
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
          <PreLoader />
          <Toolbar disableGutters={!open}>
            {isMobile ?
              <IconButton
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}>
                <Menu />
              </IconButton> : null
            }

            <Typography variant="h3" align="left" className={classes.h3}>
              <LangToggler id={COPY_TREE[4]} />
            </Typography>
            {!open && !isMobile ?
              <Grid container
                spacing={16}
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Grid item md={2} align="center">
                  <BaseButton
                    langId={COPY_TREE[0]}
                    typeButton={TYPES.LINK} />
                </Grid>
                <Grid item md={2} align="center">
                  <BaseButton
                    langId={COPY_TREE[1]}
                    typeButton={TYPES.LINK} />
                </Grid>
                <Grid item md={2} align="center">
                  <BaseButton
                    langId={COPY_TREE[2]}
                    typeButton={TYPES.LINK} />
                </Grid>
                <Grid item md={2} align="center">
                  <BaseButton
                    langId={COPY_TREE[3]}/>
                </Grid>
              </Grid> : null
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
            {COPY_TREE.slice(0, 4).map(id => (
              <ListItem button key={id}>
                <LangToggler id={id}></LangToggler>
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
  device: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

// map state to props
function mapStateToProps (state) {
  return {
    device: state.getDevice,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(Header));
