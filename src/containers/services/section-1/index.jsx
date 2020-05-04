import { Parallax } from 'react-parallax';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import React, {
  Fragment,
  useState,
} from 'react';

import {
  AppBar,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Link as A } from '@material-ui/core'

import { Element, Link } from 'react-scroll';

import {
  constants,
} from './../../../providers/config';

// provider
import LangToggler from './../../../providers/lang/toggler';
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import { TYPES } from './../../../components/commons/button';
import Callout from './../../../components/commons/callout/';
import Icon from './../../../components/commons/icon';
import LangButtonAnimate from './../../../components/commons/button/animate';
import Opacity from './../../../components/commons/opacity';
import SectionBlock from './../../../components/layouts/section';
import SmartImg from './../../../components/commons/img';

const variant = 'primary';

// paths
const {
  PATHS: {
    SERVICES,
  },
} = constants;

const styles = theme => ({
  back: {
    lineHeight: '38px',
  },
  body1: {
    padding: theme.spacing(1),
  },
  body2: {
    background: ThemeBackground({ variant }, theme, 'main'),
    padding: theme.spacing(2),
  },
  button: {
    cursor: 'pointer',
    margin: '0 auto',
  },
  caption: () => ({
    background: ThemeBackground({ variant }, theme, 'dark'),
    color: ThemeColor({ variant }, theme),
    padding: theme.spacing(4),
    width: '100%',
  }),
  container: {
    background: 'transparent',
  },
  copy: {
    margin: `${theme.spacing(2)}px 0 0 0`,
    textAlign: 'justify',
  },
  crumb: () => ({
    color: ThemeColor({ variant }, theme),
    cursor: 'default',
    textTransform: 'lowercase',
  }),
  crumbLink: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: ThemeColor({ variant }, theme),
    cursor: 'pointer',
    textTransform: 'lowercase',
  },
  description: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  descriptionContainer: {
    background: ThemeBackground({ variant }, theme, 'light'),
    maxWidth: 'initial',
    minHeight: 'initial',
    padding: `${theme.spacing(1)}px 0`,
  },
  details: {
    padding: `${theme.spacing(10)}px 0 0 0`,
  },
  divider: {
    margin: `${theme.spacing(4)}px 0`,
  },
  h3: {
    background: ThemeBackground({ variant }, theme, 'dark'),
    display: 'inline-block',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  icon: {
    lineHeight: 0,
  },

  images: {
    '&:hover': {
      filter: 'initial',
      imageRendering: 'initial',
    },
    border: `1px solid ${ThemeBackground({ variant }, theme, 'light')}`,
    filter: 'grayscale(100%) blur(.4px) contrast(90%)',
    imageRendering: 'pixelated',
    marginTop: theme.spacing(2),
    transition: theme.transitions.create(
      ['filter'],
      { duration: theme.transitions.duration.complex },
    ),
  },
  item: {
    '&:hover': {
      borderColor: theme.palette.utils.highlight,
    },
    '&:hover .MuiCardMedia-root': {
      filter: 'grayscale(0%)',
    },
    background: ThemeBackground({ variant }, theme, 'main'),
    border: '0 solid transparent',
    borderColor: ThemeBackground({ variant }, theme, 'light'),
    borderWidth: '2px',
    boxShadow: 'none',
    padding: theme.spacing(2),
    position: 'relative',
    textTransform: 'capitalize',
  },
  itemActions: {
    bottom: 0,
    height: '100%',
    padding: theme.spacing(2),
    position: 'absolute',
    right: theme.spacing(1),
    zIndex: 2,
  },
  itemContent: {
    padding: 0,
  },
  itemHeader: {},
  itemList: {},
  itemMedia: {
    backgroundSize: '100%',
    border: `4px solid ${theme.palette.primary.main}`,
    height: 500,
    marginTop: theme.spacing(2),
    position: 'relative',
  },
  itemSelected: {
    borderColor: ThemeColor({ variant }, theme),
    color: ThemeColor({ variant }, theme),
    fontWeight: 600,
  },
  itemTitle: {
    background: 'transparent',
    color: ThemeColor({ variant }, theme),
    textTransform: 'capitalize',
  },
  logo: {
    display: 'block',
    margin: 0,
    width: '50%',
  },
  svg: {
    marginBottom: theme.spacing(2),
  },
  title: {
    textTransform: 'capitalize',
  },
  titleContainer: {
    background: 'transparent',
    padding: '0',
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
  },
  titleHeader: {
    background: ThemeBackground({ variant }, theme, 'light'),
    display: 'inline-block',
    margin: `${theme.spacing(20)}px auto`,
    opacity: 0.8,
    padding: `${theme.spacing(1)}px ${theme.spacing(6)}px`,
    textTransform: 'capitalize',
  },
});

function CustomLink (props: {
  classes: Object,
  history: Object,
  onReset: Function,
  path: String,
  url: String,
}) {
  const {
    classes,
    history,
    onReset,
    path,
    url,
  } = props;

  return url && (
    <A onClick={(evt) => {
      evt.preventDefault();
      history.replace(url);
      onReset();
    }}>
      <Typography variant="h5" className={classes.crumbLink}>{path}</Typography>
    </A>
  ) || (
    <Typography variant="h5" className={classes.crumb}>{path}</Typography>
  );
};

function SectionA (props: {
  children: any,
  classes: Object,
  data: Object,
  history: Object,
  match: Object,
  onReset: Function,
  onServiceListClick: Function,
  proxy: Object,
}) {
  const {
    children,
    classes,
    data,
    history,
    match: {
      params: {
        serviceUrl,
      },
    },
    onReset,
    onServiceListClick,
    proxy,
  } = props;
  let view = children;

  const [showForm, setShowForm] = useState(false);

  const {
    category,
    service,
    services,
  } = data;

  const {
    copy,
    language,
    verbiage,
  } = proxy;

  const servicePath = SERVICES[language];

  if (!showForm) {
    if (!service) {
      view = category.images && category.images.map((image, i) => {
        const key = `category-image-${i}`;

        return (
          <SmartImg key={key} src={image} proxy={proxy} className={classes.images} />
        );
      });

      if (!service && serviceUrl) {
        view = (
          <Fragment>
            <Callout
              align="center"
              className={classes.caption}
              title={copy.unknown}
              transparent
              variant={variant}
            />
            {view}
          </Fragment>
        );
      }
    } else if (service && service.id) {
      view = (
        <Paper className={classes.details} elevation={0}>
          <Card key={service.id} dense="true" elevation={0}>
            <CardHeader
              title={
                <Typography
                  variant="h2"
                  className={classes.itemTitle}
                >
                  <LangToggler id={service.title} />
                </Typography>
              }
            />
            <CardMedia
              className={classes.itemMedia}
              image={service.background}
            >
              <Opacity opacity={0.4} />
            </CardMedia>
            <Divider className={classes.divider} />
            <CardContent
              className={classes.itemContent}>
              {service.content &&
                <Fragment>
                  {service.content.map((item, y) => {
                    const k = `copy-${y}`;

                    return (
                      <Typography
                        className={classnames(classes.copy, classes[item.component])}
                        variant={item.component}
                        key={k}
                      >
                        <LangToggler id={item.copy} />
                      </Typography>

                    );
                  })}
                  <Divider className={classes.divider} />
                </Fragment>
              }
            </CardContent>
            <CardActions
              disableSpacing
            >
              <Link
                className={classes.button}
                activeClass="active"
                smooth
                spy
                to={constants.LINK_CONTACT_FORM_2}
              >
                <LangButtonAnimate
                  color="white"
                  iconClassName={classes.icon}
                  iconx="arrowUp"
                  icony="fwd"
                  lang={service.cta}
                  onClick={() => setShowForm(true)}
                  pos="right"
                  size={30}
                  typeButton={TYPES.BUTTON}
                  variant="dark2"
                />
              </Link>
            </CardActions>
          </Card>
        </Paper>
      );
    }
  }

  return (
    <Element name={constants.LINK_CONTACT_FORM_2}>
      <Paper className={classes.container} elevation={0}>
        <Parallax bgImage={category.background} strength={200} className={classes.background}>
          <Opacity opacity={0.5} zIndex={0} variant="light" />
          <Paper className={classes.titleContainer} elevation={0}>
            <Typography
              className={classes.titleHeader}
              variant="h1"
            >
              <LangToggler id={category.title} />
            </Typography>
          </Paper>
        </Parallax>
        <Divider />
        <SectionBlock className={classes.descriptionContainer}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={8}>
            <Grid
              item
              sm={12}
              md={10}
              lg={10}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <CustomLink
                  onReset={onReset}
                  history={history}
                  url={`/${language}/${servicePath}`}
                  path={servicePath}
                  classes={classes}
                />

                <CustomLink
                  onReset={onReset}
                  history={history}
                  url={(service && service.id) && `/${language}${category.url[language]}` || false}
                  path={<LangToggler id={category.title} />}
                  classes={classes}
                />

                {(service && service.id) && (
                  <CustomLink
                    onReset={onReset}
                    history={history}
                    path={<LangToggler id={service.title} />}
                    classes={classes}
                  />
                )}
              </Breadcrumbs>
            </Grid>
            <Grid
              item
              sm={12}
              md={10}
              lg={10}
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                {!service && (
                  <Grid
                    item
                    sm={12}
                    md={6}
                    lg={6}
                  >
                    <Callout
                      align="left"
                      title={category.description}
                      variant={variant}
                      transparent
                    />
                  </Grid>)
                }
                {showForm && (
                  <Grid
                    item
                    sm={12}
                    md={(!service || showForm) ? 6 : 12}
                    lg={(!service || showForm) ? 6 : 12}
                  >
                    <Callout
                      align="left"
                      title={category.description}
                      variant={variant}
                      transparent
                    />
                  </Grid>
                )}
                <Grid
                  item
                  sm={12}
                  md={(!service || showForm) ? 6 : 12}
                  lg={(!service || showForm) ? 6 : 12}
                >
                  {view}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm={12}
              md={10}
              lg={10}
            >
              {services && services.map((item) => {
                const seleted = (service && service.id === item.id);

                return (
                  <Card
                    key={item.id}
                    dense="true"
                    className={classnames(classes.item, seleted && classes.itemSelected)}
                  >
                    <CardHeader
                      avatar={
                        <Icon name={category.ico} color={category.color} className={classnames(seleted && classes.itemSelected)} />
                      }
                      className={classes.itemHeader}
                      title={
                        <Typography
                          variant="body1"
                          className={classnames(classes.itemTitle, seleted && classes.itemSelected)}
                        >
                          <LangToggler id={item.title} />
                          <Opacity opacity={0.4} />
                        </Typography>
                      }
                    />
                    <CardActions
                      className={classes.itemActions}
                      disableSpacing
                    >
                      <LangButtonAnimate
                        className={classnames(classes.button, seleted && classes.itemSelected)}
                        color="black"
                        iconClassName={classes.icon}
                        iconx="arrowUp"
                        icony="fwd"
                        lang={category.cta}
                        onClick={() => {
                          setShowForm(false);
                          onServiceListClick(category, item);
                        }}
                        pos="right"
                        size={30}
                        typeButton={TYPES.BUTTON}
                        variant="light"
                      />
                    </CardActions>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </SectionBlock>
      </Paper>
    </Element>
  );
}

export default withStyles(styles)(withRouter(SectionA));
