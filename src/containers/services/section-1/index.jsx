import { Parallax } from 'react-parallax';
import { Section, SectionLink } from 'react-scroll-section';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';

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
    padding: theme.spacing(4),
  }),
  col1: {
    backgroundColor: 'transparent',
  },
  col2: {
    background: theme.palette.utils.transparent,
  },
  copy: {
    fontSize: '.7em',
    margin: `0 0 ${theme.spacing(2)}px 0`,
    textAlign: 'justify',
  },
  h3: {
    fontSize: '1em',
  },
  headroom: {
    padding: `${theme.spacing(2)}px 0`,
    width: '100%',
  },
  icon: {
    fontSize: '3rem',
  },
  image: {
    background: 'transparent',
    height: 300,
    padding: 0,
    position: 'relative',
    zIndex: 1,
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
  itemContent: {},
  itemHeader: {
    paddingBottom: 0,
    paddingTop: theme.spacing(1),
  },
  itemList: {
    background: theme.palette.utils.transparent,
    marginTop: theme.spacing(2),
  },
  itemMedia: {
    filter: 'grayscale(100%)',
    height: theme.spacing(9),
  },
  itemMedia2: {
    height: 200,
    marginTop: theme.spacing(2),
  },
  itemSelected: {
    '& .MuiCardMedia-root': {
      filter: 'grayscale(0%)',
    },
    borderColor: ThemeColor({ variant }, theme),
  },
  svg: {
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
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
  onServiceListClick: Function,
  proxy: Object,
}) {
  const {
    children,
    classes,
    data,
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

      if (service === false) {
        view = (
          <Fragment>
            <Fragment>Service Not Found</Fragment>
            {view}
          </Fragment>
        );
      }
    } else if (service.id) {
      view = (
        <Paper className={classes.col2} elevation={1}>
          <Card key={service.id} dense="true">
            <CardMedia
              className={classes.itemMedia2}
              image={service.background}
            />
            <CardContent>
              <Typography
                variant="h3"
                className={classes.title}
              >
                <LangToggler id={service.title} />
              </Typography>
              {service.content &&
                <Fragment>
                  {service.content.map(item => (
                    <Typography
                      className={classnames(classes.copy, classes[item.component])}
                      variant={item.component}
                    >
                      <LangToggler id={item.copy} />
                    </Typography>
                  ))}
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
                      variant="dark2"
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
        <Paper className={classes.image} />
      </Parallax>
      <SectionBlock>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}>
          <Grid
            item
            sm={12}
            md={12}
            lg={12}
          >
            <Paper className={classes.col1} elevation={0}>
              <Typography
                variant="h2"
                className={classes.title}
              >
                <LangToggler id={category.title} />
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={6}>
            <Paper className={classes.itemList} elevation={0}>
              <Typography
                variant="body1"
                className={classes.description}
              >
                <LangToggler id={category.description} />
              </Typography>
              {services && services.map(item => (
                <Card key={item.id} dense="true" className={classnames(classes.item, (service && service.id === item.id) && classes.itemSelected)}>
                  <CardHeader
                    avatar={
                      <Icon name={category.ico} className={classes.icon} />
                    }
                    className={classes.itemHeader}
                    title={
                      <Typography
                        variant="h3"

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
                    <SectionLink section="service-details" key={item.id}>
                      {link => (
                        <Box p={1} onClick={link.onClick}>
                          <LangButton
                            className={classes.button}
                            lang={category.cta}
                            onClick={() => {
                              setShowForm(false);
                              onServiceListClick(item);
                            }}
                            variant="light"
                            pos="right">
                            <Icon name="keyboard_arrow_right" />
                          </LangButton>
                        </Box>
                      )}
                    </SectionLink>
                  </CardActions>
                </Card>
              ))}
            </Paper>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={6}>
            <Section id="service-details">
              <Fade>
                {view}
              </Fade>
            </Section>
          </Grid>
        </Grid>
      </SectionBlock>
    </Fragment>
  );
}

export default withStyles(styles)(withRouter(SectionA));
