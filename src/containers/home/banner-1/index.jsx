import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import React from 'react';

import {
  Grid,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

// components
import Icon from './../../../components/commons/icon';

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

const NODE = 'home';
const SLOT = 'banner_1';
// copy:
// 1 logos
const copy = LangGenerateTree([NODE, SLOT], [
  'items-9-logo',
  'items-9-alt',
]);

function BannerA (props: {
  classes: Object,
  proxy: Object,
}) {
  const { classes, proxy } = props;
  const { verbiage, language } = proxy;
  const sliderProps = {
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '60px',
    className: 'container',
    infinite: true,
    nextArrow: <Icon name="keyboard_arrow_right" className={classes.nextArrow} color="secondary" />,
    prevArrow: <Icon name="keyboard_arrow_left" className={classes.prevArrow} color="secondary" />,
    slidesToShow: 6,
    swipeToSlide: true,
  };

  return (
    (verbiage && language) &&
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}>
      <Grid
        item
        sm={12}
        md={8}>
        <Slider {...sliderProps}>
          {copy.items.map((item, i) => {
            const key = `slicker-item-${i}`;
            return (
              <div className={classes.item} key={key}>
                <img alt={verbiage(item.alt)[language]} src={verbiage(item.logo)} className={classes.image} />
              </div>
            );
          })}
        </Slider>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(BannerA);
