import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import React, { Component } from 'react';

import {
  AppBar,
  Grid,
  Icon,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import {
  constants,
} from './../../../../providers/config';

import LangToggler from './../../../../providers/lang/toggler';

import { LangButton, TYPES } from './../../button';
import { SmartImg } from './../../img';

const {
  GENERAL,
} = constants;

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
    textAlign: 'left',
  },
});

class NavbarSimple extends Component {
  getPromos () {
    const {
      copy: {
        promos,
      },
      id,
      proxy: {
        verbiage,
      },
    } = this.props;

    return verbiage && verbiage(promos)
      // filter by type
      .filter((promo) => {
        // set general default and selected forms type
        return promo.type.includes(GENERAL) || promo.type.includes(id);
      });
  }

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
    id: String,
    onBack: Function,
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

    const sliderProps = {
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      centerPadding: '60px',
      className: 'container',
      infinite: true,
      slidesToShow: 2,
      swipeToSlide: true,
    };

    const filter = this.getPromos() || [];

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
            {filter.length > 0 && (
              <Grid
                item
                sm={12}
                md={2}
                lg={2}>
                <Slider {...sliderProps}>
                  {filter.map((item, i) => {
                    const key = `slicker-item-${i}`;
                    return (
                      <div className={classes.item} key={key}>
                        <SmartImg proxy={proxy} src={item.image} alt={item.alt} />
                      </div>
                    );
                  })}
                </Slider>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavbarSimple);
