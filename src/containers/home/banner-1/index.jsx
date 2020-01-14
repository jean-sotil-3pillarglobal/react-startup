import React from 'react';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

// provider
import Slider from './../../../components/commons/slider';

const styles = () => ({
  container: {},
  image: {
    width: '100%',
  },
});

const NODE = 'home';
const SLOT = 'banner_1';

const copy = LangGenerateTree([NODE, SLOT], [
  'items-8-logo',
  'items-8-alt',
]);

function BannerA (props: {
  classes: Object,
  proxy: Object,
}) {
  const { classes, proxy } = props;
  const { verbiage, language } = proxy;
  const items = [];

  if (verbiage && language) {
    copy.items.forEach((item, i) => {
      items.push({
        key: i,
        render: () => (
          <img alt={verbiage(item.alt)[language]} src={verbiage(item.logo)} className={classes.image} />
        ),
      });
    });
  }

  return (
    <Paper elevation={3}>
      <Slider sm={12} md={10} lg={10} items={items} slidesToShow={7} />
    </Paper>
  );
}

export default withStyles(styles)(BannerA);
