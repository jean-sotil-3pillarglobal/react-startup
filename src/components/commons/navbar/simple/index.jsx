import classnames from 'classnames';
import React, { Component } from 'react';

import {
  AppBar,
  Card,
  CardContent,
  Grid,
  Icon,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import Headroom from 'react-headroom';

import Animate from './../../icon/animate';
import { LangButton, TYPES, VARIANTS } from './../../button';

const styles = theme => ({
  button: {
    '& svg *': {},
    display: 'inline',
  },
  card: {
    backgroundColor: 'transparent',
    textAlign: 'right',
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
    textAlign: 'left',
  },
  subtitle: {
    textDecoration: 'underline',
  },
  title: {
    display: 'inline',
  },
});

class NavbarSimple extends Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  props: {
    back: string,
    caption: string,
    classes: Object,
    classes: Object,
    history: Object,
    icon: string,
    title: string,
  }

  render() {
    const {
      back,
      caption,
      classes,
      icon,
      title,
    } = this.props;

    return (
      <Headroom
        className={classes.headroom}
        onPin={() => console.log('pinned')}
        onUnpin={() => console.log('unpinned')}>
        <AppBar position="static" color="primary" className={classes.root}>
          <Toolbar>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="space-between">
              <Grid
                item
                sm={4}
                md={2}
                lg={2}>
                <LangButton
                  lang={back}
                  onClick={this.goBack}
                  variant={VARIANTS.OUTLINED}
                  typeButton={TYPES.SECONDARY}
                  pos="left">
                  <Icon name="angle-left-b" className={classes.icon} />
                </LangButton>
              </Grid>
              <Grid
                item
                sm={7}
                md={9}
                lg={9}>
                <Card className={classes.card} elevation={0}>
                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h4" component="h2">
                      {title}
                    </Typography>
                    <Typography className={classes.subtitle} variant="h5" color="textSecondary" component="p">
                      {caption}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                sm={1}
                md={1}
                lg={1}>
                <Animate type={icon || ''} customStyle={classnames(classes.button)} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Headroom>
    );
  }
}

export default withStyles(styles)(NavbarSimple);
