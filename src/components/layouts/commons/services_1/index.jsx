
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

import { LangButton, TYPES } from './../../../commons/button';

const styles = theme => ({
  card: {
    background: theme.palette.utils.blur,
    boxShadow: 'initial',
    maxWidth: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(6)}px`,
    position: 'relative',
    textAlign: 'center',
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
    background: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    cursor: 'default',
    padding: theme.spacing(2),
  }),
  cardContent: {
    zIndex: 2,
  },
  cardHover: props => ({
    background: ThemeBackground(props, theme, 'light'),
  }),
  cardTitle: {
    color: theme.palette.primary.contrastText,
    cursor: 'default',
    marginBottom: `${theme.spacing(2)}px`,
  },
  cardTitleHover: props => ({
    color: ThemeColor(props, theme),
  }),
  cta: {
    padding: `${theme.spacing(6)}px 0`,
  },
  icon: () => ({
    fontSize: '3.4em',
  }),
  item: props => ({
    '&.MuiGrid-item:hover': {
      filter: 'grayscale(100%)',
    },
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    border: `2px solid ${ThemeColor(props, theme)}`,
    flexShrink: 0,
    overflow: 'hidden',
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
  'categories',
  'id',
  'services',
  'title',
]);

function ServicesLayout (props: {
  classes: Object,
  proxy: Object,
  setServiceCategory: Function,
  variant: String,
}) {
  const {
    classes,
    history,
    proxy,
    variant,
    setServiceCategory,
  } = props;

  const {
    language,
    verbiage,
  } = proxy;

  const [useHover, setHover] = useState(false);

  const handleHover = (payload) => {
    setHover(payload);
  };

  const handleServiceCategoryClick = (evt, item) => {
    evt.preventDefault();
    setServiceCategory(item, (done) => {
      if (done) history.push(item.url[language]);
    });
  };

  const items = verbiage && verbiage(copy.categories).map((item, id) => {
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
                color={item.color}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}>
              <Typography
                variant="h4"
                className={classnames(classes.cardTitle, isHover && classes.cardTitleHover)}
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
                variant="caption"
                className={classes.cardBody}>
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
                onClick={evt => handleServiceCategoryClick(evt, item)}
                variant={!isHover ? 'primary' : 'dark2'}
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
        className={classes.items}
        spacing={8}>
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
        {items.map(item => (
          <Grid
            item
            key={item.id}
            className={classes.item}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            onMouseEnter={() => handleHover({
              hover: true,
              id: item.id,
            })}
            onMouseLeave={() => handleHover({
              hover: false,
            })}
            sm={12}
            md={4}
            lg={4}
          >
            {item.render()}
          </Grid>
        ))}
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(withRouter(ServicesLayout));
