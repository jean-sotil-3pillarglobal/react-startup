
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import React, { useState } from 'react';

import {
  Box,
  Card,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../../providers/lang/toggler';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

// components
import Icon from './../../../commons/icon';
import SectionBlock from './../../section';
import Slider from './../../../commons/slider';

import { LangButton, TYPES } from './../../../commons/button';

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
  cardBackground: props => ({
    backgroundColor: ThemeBackground(props, theme),
    content: '',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: 0.4,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1,
  }),
  cardBackgroundHover: {
    opacity: 0.8,
  },
  cardBody: props => ({
    color: ThemeColor(props, theme),
    cursor: 'default',
  }),
  cardContent: {
    zIndex: 2,
  },
  cardContentHover: {
    opacity: 0.5,
  },
  cardHover: props => ({
    boxShadow: `0 0 ${theme.spacing(2)}px ${ThemeColor(props, theme)} inset`,
  }),
  cardTitle: {
    color: theme.palette.primary.contrastText,
    cursor: 'default',
    fontSize: '1.8rem',
    fontWeight: 800,
    marginBottom: `${theme.spacing(2)}px`,
    textTransform: 'capitalize',
  },
  cta: {
    padding: `${theme.spacing(6)}px 0`,
  },
  icon: props => ({
    color: ThemeColor(props, theme),
    fontSize: '3.4em',
  }),
  items: {
    padding: 0,
    textAlign: 'center',
  },
  slider: {
    padding: `0 ${theme.spacing(2)}px`,
  },
  subtitle: props => ({
    color: ThemeColor(props, theme),
    marginBottom: `${theme.spacing(8)}px`,
  }),
  title: props => ({
    color: ThemeColor(props, theme),
    marginBottom: `${theme.spacing(8)}px`,
  }),
});

const NODE = 'commons';
const SLOT = 'services_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'body',
  'id',
  'services',
  'title',
]);

function ServicesLayout (props: {
  classes: Object,
  proxy: Object,
  setService: Function,
  variant: String,
}) {
  const {
    classes,
    history,
    proxy,
    variant,
    setService,
  } = props;

  const {
    language,
    verbiage,
  } = proxy;

  const [useHover, setHover] = useState(false);

  const handleHover = (payload) => {
    setHover(payload);
  };

  const handleClick = (evt, item) => {
    evt.preventDefault();
    setService(item, (done) => {
      if (done) history.push(item.url[language]);
    });
  };

  const items = verbiage && verbiage(copy.services).map((item, id) => {
    const isHover = useHover.id === `item-${id}`;

    return ({
      id: `item-${id}`,
      image: item.background,
      render: () => (
        <Card
          className={classnames(classes.card, isHover && classes.cardHover)}
          key={item.id}>
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
                name={item.ico}
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
                onClick={evt => handleClick(evt, item)}
                variant={!isHover ? 'dark' : 'dark2'}
                typeButton={TYPES.CONTAINED}
              />
            </Grid>
          </Grid>
        </Card>
      ),
    });
  });

  return (
    verbiage &&
    <SectionBlock
      variant={!variant ? 'light' : variant}
      id={verbiage(copy.id)}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.items}>
        <Grid
          item
          sm={12}
          md={12}>
          <Typography
            variant="h2"
            className={classes.title}
            color="primary">
            <LangToggler id={copy.title} />
          </Typography>
          <Typography
            variant="body2"
            className={classes.subtitle}
            color="primary">
            <LangToggler id={copy.body} />
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          md={12}
          className={classes.slider}>
          <Slider
            items={items}
            onHover={handleHover}
          />
        </Grid>
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(withRouter(ServicesLayout));
