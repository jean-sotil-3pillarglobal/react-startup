import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import React from 'react';

import {
  Grid,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  button: {
    '& svg *': {
      stroke: theme.palette.primary.dark,
    },
    '& svg:hover *': {
      fill: theme.palette.secondary.main,
      stroke: theme.palette.secondary.contrastText,
    },
    fontSize: '1rem',
  },
  container: {
    '& .slick-slide *': {
      outline: 'none!important',
    },
    border: `0 solid ${theme.palette.secondary.main}`,
    borderBottom: theme.spacing(2),
    position: 'relative',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
  },
  item: {
    padding: `${theme.spacing(6)}px ${theme.spacing(2)}px`,
  },
  nextArrow: {},
  prevArrow: {},
});

function SliderLayout (props: {
  classes: Object,
  items: Array,
  lg: Integer,
  md: Integer,
  proxy: Object,
  slidesToShow: Integer,
  sm: Integer,
}) {
  const {
    classes,
    items,
    lg,
    md,
    slidesToShow,
    sm,
  } = props;

  const sliderProps = {
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '60px',
    className: 'container',
    infinite: true,
    slidesToShow: slidesToShow || 4,
    swipeToSlide: true,
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}>
      <Grid
        item
        sm={sm || 12}
        md={md || 12}
        lg={lg || 12}
      >
        <Slider {...sliderProps}>
          {items.map((item) => {
            return (
              <div className={classes.item} key={`${item.key}-slider-item`}>
                {item.render()}
              </div>
            );
          })}
        </Slider>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SliderLayout);
