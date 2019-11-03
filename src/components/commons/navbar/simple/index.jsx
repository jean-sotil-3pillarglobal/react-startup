
import React, { Component } from 'react';

import {
  AppBar,
  Grid,
  Icon,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import LangToggler from './../../../../providers/lang/toggler';

import { LangButton, TYPES } from './../../button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
    textAlign: 'left',
  },
});

class NavbarSimple extends Component {
  goBack = () => {
    const {
      history,
    } = this.props;

    history.goBack();
  }

  props: {
    classes: Object,
    copy: Object,
    history: Object,
    proxy: Object,
    title: String,
  }

  render () {
    const {
      classes,
      copy: {
        back,
      },
      proxy,
      title,
    } = this.props;

    return (
      proxy &&
      <AppBar position="static" color="primary" className={classes.root}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            direction="row"
            justify="space-between">
            <Grid
              item
              sm={12}
              md={2}
              lg={2}>
              <LangButton
                lang={back}
                onClick={this.goBack}
                variant="dark2"
                typeButton={TYPES.CONTAINED}
                pos="left">
                <Icon name="angle-left-b" className={classes.icon} />
              </LangButton>
            </Grid>
            <Grid
              item
              sm={12}
              md={8}
              lg={8}>
              <Typography
                variant="body2"
                className={classes.title}>
                <LangToggler id={title} />
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavbarSimple);
