import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import { Component, Fragment } from 'react';
import classnames from 'classnames';

import {
  Grid,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateId from './../../../providers/utils/lang.generate.id';
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';

// components
import Animate from './../../../components/commons/icon/animate/index.jsx';
import SectionBlock from './../../../components/layouts/section/index.jsx';

const styles = theme => ({
  button: {
    '& svg *': {
      stroke: theme.palette.primary.dark,
    },
    '& svg:hover *': {
      fill: theme.palette.secondary.main,
      stroke: theme.palette.secondary.contrastText,
    },
  },
  container: {
    border: `0 solid ${theme.palette.secondary.light}`,
    borderWidth: '1px 0',
    boxShadow: `0 0 10px ${theme.palette.utils.lighter} inset`,
    left: '-2%',
    padding: `${theme.spacing.unit * 2}px 0`,
    position: 'relative',
    textAlign: 'center',
    width: '104%',
  },
  image: {
    width: '100%',
  },
  item: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  nextArrow: {},
  prevArrow: {
    '& svg': {
      transform: 'rotate(-180deg)',
    },
  },
});

const NODE = 'home';
const SLOT = 'banner_1';
// copy:
// 1 logos
const copy = LangGenerateTree([NODE, SLOT], [
  'items-9-logo',
  'items-9-alt',
]);

class BannerA extends Component {
  render () {
    const { classes, proxy } = this.props;
    const { verbiage, language } = proxy;
    const props = {
      centerMode: true,
      centerPadding: '60px',
      className: 'container',
      infinite: true,
      nextArrow: <Animate type="ffwd" customStyle={classnames(classes.nextArrow, classes.button)} />,
      prevArrow: <Animate type="ffwd" customStyle={classnames(classes.prevArrow, classes.button)} />,
      slidesToShow: 3,
      speed: 500,
    };

    return (
      (verbiage && language) &&
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.container}>
        <Grid item
          sm={12}
          md={8}>
          <Slider {...props}>
            {copy.items.map((item, i) => (
              <div className={classes.item} key={`slicker-item-${i}`}>
                <img alt={verbiage(item.alt)[language]} src={verbiage(item.logo)} className={classes.image} />
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BannerA);
