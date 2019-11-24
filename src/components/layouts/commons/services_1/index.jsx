
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import React, { useState } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
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

// components
import Icon from './../../../commons/icon';
import SectionBlock from './../../section';

import { LangButton, TYPES } from './../../../commons/button';

const styles = theme => ({
  card: props => ({
    background: ThemeBackground(props, theme, 'main'),
    border: `1px solid ${ThemeColor(props, theme)}`,
    boxShadow: 'initial',
    flexShrink: 0,
    maxWidth: '120%',
    position: 'relative',
    textAlign: 'center',
  }),
  cardContent: {
    zIndex: 2,
  },
  cardHover: {},
  cardList: props => ({
    background: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    cursor: 'default',
    padding: theme.spacing(2),
    textAlign: 'right',
  }),
  cardMedia: {
    height: 60,
  },
  cardTitle: props => ({
    color: ThemeColor(props, theme),
    cursor: 'default',
  }),
  cardTitleHover: props => ({
    color: ThemeColor(props, theme),
    textDecoration: 'underline',
  }),
  cta: {
    padding: `${theme.spacing(2)}px 0`,
  },
  featuredText: props => ({
    background: ThemeBackground(props, theme, 'main'),
    display: 'inline-block',
    fontSize: '.8em',
    marginLeft: theme.spacing(2),
    padding: '2px',
    textTransform: 'uppercase',
  }),
  icon: () => ({
    fontSize: '1.4em',
  }),
  item: props => ({
    border: `0 solid ${ThemeColor(props, theme)}`,
    marginBottom: theme.spacing(10),
    overflow: 'hidden',
  }),
  items: {
    padding: 0,
    textAlign: 'center',
  },
  serviceIcon: {
    fontSize: '.5em',
  },
  serviceTitle: {
    lineHeight: '0!important',
    marginBottom: 0,
    marginTop: 0,
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

  const services = verbiage && verbiage(copy.services);

  const categories = verbiage && verbiage(copy.categories).map((item, id) => {
    const isHover = useHover.id === `item-${id}`;

    const filteredServices = services.filter(service => service.categories && service.categories.includes(item.id)) || [];

    return ({
      id: `item-${id}`,
      render: () => (
        <Card
          className={classnames(classes.card, isHover && classes.cardHover)}
          key={item.id}>
          <CardHeader
            avatar={
              <Fab onClick={evt => handleServiceCategoryClick(evt, item)}>
                <Icon
                  name={item.ico}
                  className={classes.icon}
                  color={item.color}
                />
              </Fab>
            }
            title={<LangToggler id={item.title} />}
            className={classnames(classes.cardTitle, isHover && classes.cardTitleHover)}
          />
          <CardMedia
            image={item.background}
            title={item.title[language] || ''}
            className={classes.cardMedia}
          />
          <CardContent>
            <Grid
              container
              className={classes.cardContent}
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
                            color={item.color}
                          />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.serviceTitle}
                          primary={(
                            <Typography
                              variant="caption"
                            >
                              <LangToggler id={service.label} />
                              {service.featured &&
                                <Typography
                                  variant="caption"
                                  className={classes.featuredText}>
                                  <LangToggler id={service.featuredText} />
                                </Typography>
                              }
                            </Typography>
                          )} />
                      </ListItem>
                    );
                  })}
                </List>
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
          </CardContent>
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
        spacing={4}>
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
