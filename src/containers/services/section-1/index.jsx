import { Parallax } from 'react-parallax';
import { SectionLink } from 'react-scroll-section';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
// import Fade from 'react-reveal/Fade';

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

// provider
// import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import { LangButton } from './../../../components/commons/button';
import Icon from './../../../components/commons/icon';
import SectionBlock from './../../../components/layouts/section';
import SmartImg from './../../../components/commons/img';

const variant = 'light';

const styles = theme => ({
  caption: () => ({
    background: ThemeBackground({ variant }, theme, 'dark'),
    color: ThemeColor({ variant }, theme),
    fontSize: '.5em',
    padding: theme.spacing(4),
    width: '100%',
  }),
  col2: {
    background: theme.palette.utils.transparent,
    border: `${theme.spacing(1)}px solid ${ThemeColor({ variant: 'secondary' }, theme)}`,
    borderRadius: 0,
    margin: `0 ${theme.spacing(4)}px`,
  },
  copy: {
    fontSize: '.7em',
    margin: `${theme.spacing(3)}px 0 0 0`,
    textAlign: 'justify',
    width: '100%',
  },
  description: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
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
    border: '0 solid transparent',
    borderColor: ThemeBackground({ variant }, theme, 'light'),
    borderWidth: '2px',
    boxShadow: 'none',
    marginBottom: theme.spacing(2),
    padding: `0 0 ${theme.spacing(2)}px 0`,
    position: 'relative',
    textTransform: 'capitalize',
  },
  itemActions: {
    bottom: 0,
    left: 0,
    padding: theme.spacing(2),
    position: 'absolute',
  },
  itemContent: {
    padding: `${theme.spacing(8)}px ${theme.spacing(6)}px`,
  },
  itemHeader: {
    paddingBottom: 0,
    paddingTop: theme.spacing(1),
  },
  itemList: {
    background: theme.palette.utils.transparent,
  },
  itemMedia: {
    filter: 'grayscale(100%)',
    height: theme.spacing(9),
  },
  itemMedia2: {
    height: 200,
  },
  itemSelected: {
    '& .MuiCardMedia-root': {
      filter: 'grayscale(0%)',
    },
    borderColor: ThemeColor({ variant }, theme),
  },
  itemTitle: {
    fontSize: '.8em',
  },
  svg: {
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  titleContainer: {
    background: 'transparent',
    padding: `${theme.spacing(16)}px 0`,
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
              <SectionLink section="service-details" key={`category-link-${service.id}`}>
                {link => (
                  <Box p={1} onClick={link.onClick}>
                    <LangButton
                      className={classes.button}
                      lang={service.cta}
                      pos="right"
                      onClick={() => setShowForm(true)}>
                      <Icon name="keyboard_arrow_right" />
                    </LangButton>
                  </Box>
                )}
              </SectionLink>
            </CardActions>
          </Card>
        </Paper>
      );
    }
  }

  return (
    <Fragment>
      <Parallax bgImage={category.background} strength={500} className={classes.background}>
        <Paper className={classes.titleContainer} elevation={0}>
          <Typography
            variant="h2"
            className={classes.title}
          >
            <LangToggler id={category.title} />
          </Typography>
        </Paper>
      </Parallax>
      <SectionBlock id="service-details">
        <Grid
          container
          direction="row"
          spacing={1}>
          <Grid
            item
            sm={12}
            md={5}
            lg={5}>
            <Typography
              variant="body1"
              className={classes.description}
            >
              <LangToggler id={category.description} />
            </Typography>
            <Paper className={classes.itemList} elevation={0}>
              {services && services.map(item => (
                <Card key={item.id} dense="true" className={classnames(classes.item, (service && service.id === item.id) && classes.itemSelected)}>
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
                      </Typography>
                    }
                  />
                  <CardMedia
                    className={classes.itemMedia}
                    image={item.background}
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
            </Paper>
          </Grid>
          <Grid
            item
            sm={12}
            md={7}
            lg={7}
          >
            {view}
          </Grid>
        </Grid>
      </SectionBlock>
    </Fragment>
  );
}

export default withStyles(styles)(withRouter(SectionA));
