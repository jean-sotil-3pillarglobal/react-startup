import { Parallax } from 'react-parallax';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import React, {
  Fragment,
  useState,
} from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Element, Link } from 'react-scroll';

import {
  constants,
} from './../../../providers/config';

// provider
import LangToggler from './../../../providers/lang/toggler';
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import { LangButton } from './../../../components/commons/button';
import Icon from './../../../components/commons/icon';
import Opacity from './../../../components/commons/opacity';
import SectionBlock from './../../../components/layouts/section';
import SmartImg from './../../../components/commons/img';

const variant = 'light';

const styles = theme => ({
  button: {
    cursor: 'pointer',
    margin: '0 auto',
  },
  caption: () => ({
    background: ThemeBackground({ variant }, theme, 'dark'),
    color: ThemeColor({ variant }, theme),
    fontSize: '.5em',
    padding: theme.spacing(4),
    width: '100%',
  }),
  chip: () => ({
    background: ThemeBackground({ variant }, theme, 'main'),
    color: ThemeColor({ variant }, theme),
    textTransform: 'capitalize',
    width: '95%',
  }),
  chipFocused: {
    border: `1px solid ${ThemeColor({ variant }, theme)}`,
  },
  container: {
    background: 'transparent',
  },
  copy: {
    fontSize: '.7em',
    margin: `${theme.spacing(3)}px 0 0 0`,
    textAlign: 'justify',
    width: '100%',
  },
  description: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  descriptionContainer: {
    background: ThemeBackground({ variant }, theme, 'light'),
    marginTop: theme.spacing(8),
    maxWidth: 'initial',
    minHeight: 'initial',
    padding: `${theme.spacing(1)}px 0`,
  },
  details: {
    padding: `${theme.spacing(4)}px 0 0 0`,
  },
  divider: {
    margin: `${theme.spacing(4)}px 0`,
  },
  h3: {
    fontSize: '1em',
  },
  h4: {
    marginTop: theme.spacing(6),
    textDecoration: 'underline',
  },
  headroom: {
    padding: `${theme.spacing(2)}px 0`,
    width: '100%',
  },
  icon: {
    color: ThemeColor({ variant }, theme),
    fontWeight: 200,
    height: 18,
    marginTop: theme.spacing(1),
  },
  images: {
    border: `1px solid ${ThemeBackground({ variant }, theme, 'light')}`,
    marginTop: theme.spacing(2),
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
    backgroundSize: 'cover',
    height: 400,
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
    paddingRight: '20%',
    textTransform: 'capitalize',
  },
  navigation: {
    padding: theme.spacing(2),
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
    margin: `${theme.spacing(12)}px auto`,
    opacity: 0.8,
    padding: `${theme.spacing(1)}px ${theme.spacing(6)}px`,
    textTransform: 'capitalize',
  },
});

function SectionA (props: {
  children: any,
  classes: Object,
  data: Object,
  history: Object,
  match: Object,
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
  } = proxy;

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
            <Typography
              variant="caption"
              className={classes.caption}
            >
              <LangToggler id={category.unknown} />
            </Typography>
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
                  variant="h4"
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
                <LangButton
                  lang={service.cta}
                  pos="right"
                  onClick={() => setShowForm(true)}
                  variant="dark2">
                  <Icon variant="primary" name="left_arrow" />
                </LangButton>
              </Link>
            </CardActions>
          </Card>
        </Paper>
      );
    }
  }

  return (
    <Paper className={classes.container} elevation={0}>
      <Grid
        container
        className={classes.navigation}
      >
        <Grid
          item
          sm={12}
          md={6}
        >
          <LangButton
            lang={copy.back}
            onClick={() => {
              history.push('/');
            }}
            variant="light"
            pos="left">
            <Icon variant={variant} name="keyboard_arrow_left" />
          </LangButton>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid
              item
              sm={12}
              md={6}
              lg={6}
            >
              <Chip className={classes.chip} icon={<Icon name="arrow_right" variant={variant} />} label={<LangToggler id={category.title} />} />
            </Grid>
            {(service && service.id) && (
              <Grid
                item
                sm={12}
                md={6}
                lg={6}
              >
                <Chip className={classnames(classes.chip, classes.chipFocused)} icon={<Icon name="arrow_right" variant={variant} />} label={<LangToggler id={service.title} />} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Parallax bgImage={category.background} strength={200} className={classes.background}>
        <Opacity opacity={0.5} zIndex={0} variant="light" />
        <Paper className={classes.titleContainer} elevation={0}>
          <Typography
            className={classes.titleHeader}
            variant="h4"
          >
            <LangToggler id={category.title} />
          </Typography>
        </Paper>
      </Parallax>
      <Divider />
      <Element name={constants.LINK_CONTACT_FORM_2}>
        <SectionBlock className={classes.descriptionContainer}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}>
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
                    <Typography
                      variant="body1"
                      className={classes.description}
                    >
                      <LangToggler id={category.description} />
                    </Typography>
                  </Grid>)
                }
                {showForm && (
                  <Grid
                    item
                    sm={12}
                    md={(!service || showForm) ? 6 : 12}
                    lg={(!service || showForm) ? 6 : 12}
                  >
                    <Typography
                      variant="body1"
                      className={classes.description}
                    >
                      <LangToggler id={category.description} />
                    </Typography>
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
                      <LangButton
                        className={classnames(classes.button, seleted && classes.itemSelected)}
                        lang={category.cta}
                        onClick={() => {
                          setShowForm(false);
                          onServiceListClick(category, item);
                        }}
                        variant="light"
                        pos="right">
                        <Icon variant="light" className={classnames(seleted && classes.itemSelected)} name="keyboard_arrow_right" />
                      </LangButton>
                    </CardActions>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </SectionBlock>
      </Element>
    </Paper>
  );
}

export default withStyles(styles)(withRouter(SectionA));
