
import React, { useState } from 'react';
import classnames from 'classnames';

import {
  Box,
  Card,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';

// components
import Icon from './../../../components/commons/icon';
import SectionBlock from './../../../components/layouts/section';
import Slider from './../../../components/commons/slider';

import { LangButton, TYPES, VARIANTS } from './../../../components/commons/button';

const styles = theme => ({
  card: {
    background: 'transparent',
    boxShadow: 'initial',
    maxWidth: '100%',
    padding: `${theme.spacing(6)}px 0`,
    position: 'relative',
    textAlign: 'center',
    width: 300,
  },
  cardBackground: {
    backgroundColor: theme.palette.primary.light,
    content: '',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: 0.4,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1,
  },
  cardBackgroundHover: {
    opacity: 0.8,
  },
  cardBody: {
    cursor: 'default',
  },
  cardContent: {
    zIndex: 2,
  },
  cardContentHover: {
    opacity: 0.5,
  },
  cardHover: {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  cardTitle: {
    cursor: 'default',
    fontSize: '1.8rem',
    fontWeight: 800,
    marginBottom: `${theme.spacing(2)}px`,
    textTransform: 'capitalize',
  },
  cta: {
    padding: `${theme.spacing(6)}px 0`,
  },
  icon: {
    fontSize: '3.4em',
  },
  items: {
    padding: `${theme.spacing(20)}px 0`,
    textAlign: 'center',
  },
  slider: {
    padding: `0 ${theme.spacing(6)}px`,
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(8)}px`,
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(8)}px`,
  },
});

const NODE = 'home';
const SLOT = 'section_3';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'title',
  'body',
  'items-8-body',
  'items-8-cta',
  'items-8-ico',
  'items-8-image',
  'items-8-title',
  'items-8-type',
]);

function SectionB (props: {
  classes: Object,
  proxy: Object,
}) {
  const { classes, proxy } = props;
  const { verbiage } = proxy;

  const [useHover, setHover] = useState(false);

  const handleHover = (payload) => {
    setHover(payload);
  };

  const items = verbiage && copy.items.map((item, id) => {
    const isHover = useHover.id === `item-${id}`;

    return ({
      id: `item-${id}`,
      image: verbiage(item.image),
      render: () => (
        <Card
          className={classnames(classes.card, isHover && classes.cardHover)}
          key={item.type}>
          <Box
            className={classnames(classes.cardBackground, isHover && classes.cardBackgroundHover)}
            component="span"
          />
          <Grid
            container
            className={classes.cardContent}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}>
              <Icon
                name={verbiage(item.ico)}
                className={classes.icon}
                color="secondary"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}>
              <Typography
                variant="body2"
                className={classes.cardTitle}
                color="secondary"
              >
                <LangToggler id={item.title} />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}>
              <Typography
                variant="body2"
                className={classnames(classes.cardBody, !isHover && classes.cardContentHover)}>
                <LangToggler id={item.body} />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              className={classes.cta}>
              <LangButton
                lang={item.cta}
                onClick={this.handleClick}
                variant={VARIANTS.OUTLINED}
                typeButton={!isHover ? TYPES.SECONDARY : TYPES.PRIMARY} />
            </Grid>
          </Grid>
        </Card>
      ),
    });
  });

  return;
}

export default withStyles(styles)(SectionB);
