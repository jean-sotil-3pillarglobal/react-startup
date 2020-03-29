
import {
  Link,
  withRouter,
} from 'react-router-dom';

import classnames from 'classnames';
import React, { Fragment, useState } from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../../providers/lang/toggler';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

import {
  CreateUrlCategory,
  CreateUrlCategoryDetails,
} from './../../../../providers/utils/url.formatter';

// components
import Icon from './../../../commons/icon';
import Opacity from './../../../commons/opacity';
import SectionBlock from './../../section';

import { LangButton, TYPES } from './../../../commons/button';

const styles = theme => ({
  button: {
    margin: '0 auto',
  },
  buttonHover: props => ({
    backgroundColor: ThemeBackground(props, theme, 'light'),
  }),
  card: props => ({
    '&:hover': {
      borderColor: ThemeColor(props, theme),
    },
    backgroundColor: ThemeBackground(props, theme, 'main'),
    border: `2px solid ${ThemeBackground(props, theme, 'light')}`,
    borderRadius: '0 0 0 0',
    boxShadow: 'initial',
    flexShrink: 0,
    padding: theme.spacing(1),
    position: 'relative',
    textAlign: 'center',
    transition: theme.transitions.create(
      ['border-color'],
      { duration: theme.transitions.duration.complex },
    ),
  }),
  cardContent: props => ({
    background: ThemeBackground(props, theme, 'light'),
    marginTop: theme.spacing(1),
    padding: theme.spacing(0),
  }),
  cardHover: {},
  cardList: props => ({
    color: ThemeColor(props, theme),
    cursor: 'default',
    padding: theme.spacing(1),
    textAlign: 'right',
  }),
  cardMedia: {
    height: 60,
  },
  cardTitle: props => ({
    backgroundSize: 'cover',
    border: `2px solid ${ThemeBackground(props, theme, 'dark')}`,
    color: ThemeColor(props, theme),
    cursor: 'default',
    padding: `0 ${theme.spacing(2)}px`,
    position: 'relative',
  }),
  cardTitleOpacity: props => ({
    background: ThemeBackground(props, theme, 'light'),
    content: '',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: 0.4,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  }),
  cta: {
    padding: `${theme.spacing(2)}px 0`,
  },
  fab: props => ({
    backgroundColor: ThemeBackground(props, theme, 'light'),
    zIndex: 2,
  }),
  fabHover: props => ({
    backgroundColor: `${ThemeBackground(props, theme, 'dark')}!important`,
    color: ThemeColor(props, theme),
  }),
  featuredText: props => ({
    background: ThemeBackground(props, theme, 'dark'),
    display: 'inline-block',
    fontSize: '.8em',
    padding: theme.spacing(0.5),
    textTransform: 'capitalize',
  }),
  icon: () => ({
    fontSize: '1.8em',
  }),
  iconHover: props => ({
    color: ThemeColor(props, theme),
  }),
  item: props => ({
    border: `0 solid ${ThemeColor(props, theme)}`,
    marginBottom: theme.spacing(6),
    overflow: 'hidden',
  }),
  items: {
    padding: 0,
    textAlign: 'center',
  },
  link: {
    margin: '0 auto',
    textDecoration: 'none',
  },
  serviceIcon: props => ({
    color: ThemeColor(props, theme),
    fontSize: '.5em',
  }),
  serviceTitle: props => ({
    color: ThemeColor(props, theme),
    fontWeight: 500,
    marginBottom: 0,
    marginTop: 0,
    textTransform: 'capitalize',
  }),
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
  history: Object,
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
      if (done) history.push(CreateUrlCategory(language, item));
    });
  };

  const services = verbiage && verbiage(copy.services);

  const categories = verbiage && verbiage(copy.categories).map((item, id) => {
    const isHover = useHover.id === `item-${id}`;

    const filteredServices = services.filter(service => service.categories && service.categories.includes(item.id)) || [];

    return ({
      id: `item-${id}`,
      render: () => (
        <Card
          className={classnames(classes.card, isHover && classes.cardHover)}
          key={item.id}
        >
          <CardHeader
            avatar={
              <Fragment>
                <Fab
                  className={classnames(classes.fab, isHover && classes.fabHover)}
                  onClick={evt => handleServiceCategoryClick(evt, item)}>
                  <Icon
                    name={item.ico}
                    className={classnames(classes.icon, isHover && classes.iconHover)}
                    color={item.color}
                  />
                </Fab>
                <Opacity variant={variant} />
              </Fragment>
            }
            title={<LangToggler id={item.title} />}
            className={classes.cardTitle}
            style={{
              backgroundImage: `url(${item.background})`,
            }}
          />
          {filteredServices.length > 0 &&
            <CardContent className={classes.cardContent}>
              <Grid
                container
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}>
                  <List
                    className={classes.cardList}>
                    {filteredServices.map((service, i) => {
                      const key = `service-title-${id}-${i}`;
                      return (
                        <ListItem
                          button
                          key={key}
                        >
                          <ListItemIcon>
                            <Icon
                              name={item.ico}
                              className={classes.serviceIcon}
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.serviceTitle}
                            primary={(
                              <Link
                                className={classes.link}
                                to={{
                                  pathname: CreateUrlCategoryDetails(language, item, service),
                                  state: {
                                    category: item,
                                    service,
                                  },
                                }}
                              >
                                <Typography variant="caption" className={classes.serviceTitle}>
                                  <LangToggler id={service.label} />
                                  {service.featured &&
                                    <Typography
                                      variant="caption"
                                      className={classes.featuredText}>
                                      <LangToggler id={service.featuredText} />
                                    </Typography>
                                  }
                                </Typography>
                              </Link>
                            )} />
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          }
          <CardActions
            disableSpacing
          >
            <Link
              className={classes.link}
              to={{
                pathname: CreateUrlCategory(language, item),
                state: {
                  category: item,
                },
              }}
            >
              <LangButton
                className={classnames(classes.button, isHover && classes.buttonHover)}
                lang={item.cta}
                typeButton={TYPES.CONTAINED}
                variant={variant}
              />
            </Link>
          </CardActions>
        </Card>
      ),
    });
  });

  return (
    verbiage &&
    <SectionBlock
      id={verbiage(copy.id)}
      variant={variant}
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.items}
        spacing={2}>
        <Grid
          item
          sm={12}
          md={12}>
          <Typography
            variant="h2"
            className={classes.title}
          >
            <LangToggler id={copy.title} />
          </Typography>
          <Typography
            variant="body1"
            className={classes.subtitle}
          >
            <LangToggler id={copy.body} />
          </Typography>
        </Grid>
        {categories.map(item => (
          <Grid
            item
            key={item.id}
            className={classes.item}
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
