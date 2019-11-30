import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from '@material-ui/core';

import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../../providers/lang/toggler';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

// provider
import SectionBlock from './../../section';
import Slider from './../../../commons/slider';

const styles = theme => ({
  card: props => ({
    background: ThemeBackground(props, theme, 'main'),
    border: `1px solid ${ThemeBackground(props, theme, 'light')}`,
    borderRadius: '0 0 0 0',
  }),
  container: {
    textAlign: 'center',
  },
  description: props => ({
    color: ThemeColor(props, theme),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  }),
  image: {
    width: '100%',
  },
  label: props => ({
    background: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    padding: theme.spacing(1),
  }),
  media: {
    filter: 'grayscale(100%)',
    height: 220,
    padding: `${theme.spacing(2)}px`,
    width: '100%',
  },
  title: props => ({
    color: ThemeColor(props, theme),
    marginTop: theme.spacing(2),
  }),
});

const NODE = 'commons';
const SLOT = 'clerks_1';

const copy = LangGenerateTree([NODE, SLOT], [
  'clerks',
  'title',
]);

function ClerksLayout (props: {
  classes: Object,
  proxy: Object,
  variant: String,
}) {
  const {
    classes,
    proxy,
    variant,
  } = props;

  const { verbiage, language } = proxy;
  const items = [];

  if (verbiage && language) {
    verbiage(copy.clerks).forEach((item, i) => {
      items.push({
        key: i,
        render: () => (
          <Card key={item.id} dense="true" elevation={0} className={classes.card}>
            <CardMedia
              className={classes.media}
              image={item.image}
            />
            <CardContent
              className={classes.content}>
              <Typography
                variant="h4"
                className={classes.title}
              >
                <LangToggler id={item.name} />
              </Typography>
              <Typography
                variant="caption"
                className={classes.label}
              >
                <LangToggler id={item.label} />
              </Typography>

              <Typography
                variant="caption"
                className={classes.description}
              >
                <LangToggler id={item.description} />
              </Typography>
            </CardContent>
          </Card>
        ),
      });
    });
  }

  return (
    <SectionBlock variant={variant} className={classes.container}>
      <Typography
        variant="h2"
        className={classes.title}
      >
        <LangToggler id={copy.title} />
      </Typography>
      <Slider sm={12} md={10} lg={10} items={items} slidesToShow={3} />
    </SectionBlock>
  );
}

export default withStyles(styles)(ClerksLayout);
