import { Parallax } from 'react-parallax';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import React, {
  Fragment,
  useState,
} from 'react';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
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
  button: {},
  caption: () => ({
    background: ThemeBackground({ variant }, theme, 'dark'),
    color: ThemeColor({ variant }, theme),
    fontSize: '.5em',
    padding: theme.spacing(4),
    width: '100%',
  }),
  col2: {},
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
    background: ThemeBackground({ variant }, theme, 'dark'),
    margin: 0,
    maxWidth: 'initial',
    minHeight: 'initial',
    padding: `${theme.spacing(1)}px 0`,
  },
  h3: {
    fontSize: '1em',
  },
  h4: {},
  headroom: {
    padding: `${theme.spacing(2)}px 0`,
    width: '100%',
  },
  icon: {
    fontSize: '3rem',
  },
  images: {
    border: `1px solid ${ThemeBackground({ variant }, theme, 'light')}`,
    marginTop: theme.spacing(2),
  },
  item: {
    '&:hover': {
      borderColor: ThemeColor({ variant }, theme),
    },
    '&:hover .MuiCardMedia-root': {
      filter: 'grayscale(0%)',
    },
    backgroundSize: 'cover',
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
    padding: `${theme.spacing(8)}px`,
  },
  itemHeader: {},
  itemList: {
    background: theme.palette.utils.transparent,
  },
  itemMedia: {
    filter: 'grayscale(100%)',
    height: theme.spacing(9),
  },
  itemMedia2: {
    backgroundSize: 'cover',
    height: 400,
  },
  itemSelected: {
    '& .MuiCardMedia-root': {
      filter: 'grayscale(0%)',
    },
    borderColor: ThemeColor({ variant }, theme),
  },
  itemTitle: {
    paddingRight: '30%',
    textTransform: 'capitalize',
  },
  svg: {
    marginBottom: theme.spacing(2),
  },
  title: {
    background: ThemeBackground({ variant }, theme, 'main'),
    padding: theme.spacing(2),
    textTransform: 'capitalize',
  },
  titleContainer: {
    background: 'transparent',
    padding: '400px 0 0',
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
  },
});

// const NODE = 'services';
// const SLOT = 'section_1';
// // copy:
// const copy = LangGenerateTree([NODE, SLOT], [
//   'back',
//   'promos',
//   'services',
// ]);

function SectionA (props: {
  children: any,
  classes: Object,
  data: Object,
  match: Object,
  onServiceListClick: Function,
  proxy: Object,
}) {
  const {
    children,
    classes,
    data,
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
        <Paper className={classes.col2} elevation={0}>
          <Card key={service.id} dense="true" elevation={0}>
            <CardMedia
              className={classes.itemMedia2}
              image={service.background}
            />
            <CardContent
              className={classes.itemContent}>
              <Typography
                variant="h3"
                className={classes.title}
              >
                <LangToggler id={service.title} />
              </Typography>
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
                </Fragment>
              }
            </CardContent>
            <CardActions
              disableSpacing
            >
              <Link
                activeClass="active"
                smooth
                spy
                to={constants.LINK_CONTACT_FORM_2}
              >
                <Box p={1} key={`category-link-${service.id}`}>
                  <LangButton
                    className={classes.button}
                    lang={service.cta}
                    pos="right"
                    onClick={() => setShowForm(true)}>
                    <Icon variant="primary" name="left_arrow" />
                  </LangButton>
                </Box>
              </Link>
            </CardActions>
          </Card>
        </Paper>
      );
    }
  }

  return (
    <Paper className={classes.container} elevation={0}>
      <Parallax bgImage={category.background} strength={200} className={classes.background}>
        <Opacity opacity={0.5} zIndex={0} variant="light" />
        <Paper className={classes.titleContainer} elevation={0}>
          <Typography
            variant="h2"
            className={classes.title}
          >
            <LangToggler id={category.title} />
          </Typography>
        </Paper>
      </Parallax>
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
              <Grid
                item
                sm={12}
                md={!service ? 6 : 12}
                lg={!service ? 6 : 12}
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
            <Element name={constants.LINK_CONTACT_FORM_2}>
              {services && services.map(item => (
                <Card
                  key={item.id}
                  dense="true"
                  className={classnames(classes.item, (service && service.id === item.id) && classes.itemSelected)}
                >
                  <CardHeader
                    avatar={
                      <Icon name={category.ico} color={category.color} className={classes.icon} />
                    }
                    className={classes.itemHeader}
                    title={
                      <Typography
                        variant="h4"
                        className={classes.itemTitle}
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
                      className={classes.button}
                      lang={category.cta}
                      onClick={() => {
                        setShowForm(false);
                        onServiceListClick(category, item);
                      }}
                      variant="light"
                      pos="right">
                      <Icon name="keyboard_arrow_right" />
                    </LangButton>
                  </CardActions>
                </Card>
              ))}
            </Element>
          </Grid>
        </Grid>
      </SectionBlock>
    </Paper>
  );
}

export default withStyles(styles)(withRouter(SectionA));
