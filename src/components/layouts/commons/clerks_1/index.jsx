import React, { useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import classnames from 'classnames';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../../providers/lang/toggler';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

// provider
import SectionBlock from './../../section';

import Callout from './../../../commons/callout/';

const styles = theme => ({
  card: props => ({
    borderRadius: '0 0 0 0',
    display: 'flex',
  }),
  container: {
    textAlign: 'center',
  },
  description: props => ({
    color: ThemeColor(props, theme),
    display: 'block',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    maxHeight: 160,
    overflowY: 'scroll',
    padding: theme.spacing(1),
    textAlign: 'justify',
    width: '100%',
  }),
  details: {
    overflowY: 'scroll',
  },
  expand: props => ({
    color: ThemeColor(props, theme),
    fontSize: '1em',
    fontWeight: 800,
    margin: '0 auto',
  }),
  image: {
    padding: theme.spacing(1),
  },
  item: props => ({
    '&:hover': {
      background: ThemeBackground(props, theme, 'dark'),
    },
    background: ThemeBackground(props, theme, 'light'),
    border: `1px solid ${ThemeBackground(props, theme, 'light')}`,
  }),
  itemHover: props => ({
    border: `1px solid ${ThemeBackground(props, theme, 'main')}`,
  }),
  label: props => ({
    background: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    padding: theme.spacing(1),
    margin: `${theme.spacing(4)}px 0`,
  }),
  media: {
    backgroundPosition: 'center',
    filter: 'grayscale(100%) blur(.4px) contrast(90%)',
    height: 400,
    imageRendering: 'pixelated',
    padding: `${theme.spacing(2)}px`,
    transition: theme.transitions.create(
      ['filter'],
      { duration: theme.transitions.duration.complex },
    ),
    width: '100%',
  },
  mediaHover: {
    filter: 'initial',
    imageRendering: 'initial',
  },
  title: props => ({
    color: ThemeColor(props, theme),
    display: 'block',
    marginTop: theme.spacing(2),
    textAlign: 'center',
  }),
});

const NODE = 'commons';
const SLOT = 'clerks_1';

const copy = LangGenerateTree([NODE, SLOT], [
  'clerks',
  'title',
  'body',
]);

function ClerksLayout (props: {
  classes: Object,
  proxy: Object,
  variant: String,
}) {
  const [isHover, setHover] = useState(false);

  const {
    classes,
    proxy,
    variant,
  } = props;

  const { verbiage, language } = proxy;
  const items = [];

  if (verbiage && language) {
    verbiage(copy.clerks).forEach((item, i) => {
      items.push({
        key: i,
        render: () => (
          <Grid
            item
            className={classnames(classes.item, isHover && classes.itemHover)}
            key={item.id}
            md={item.size_md || 12}
            sm={item.size_sm || 12}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid
                item
                sm={12}
                md={5}
              >
                <Card key={item.id} dense="true" elevation={0} className={classes.card}>
                  <CardMedia
                    className={classnames(classes.media, isHover && classes.mediaHover)}
                    image={item.image}
                  />
                </Card>
              </Grid>
              <Grid
                item
                sm={12}
                md={7}
              >
                <div className={classes.details}>
                  <CardContent
                    className={classes.content}>
                    <Typography
                      variant="h3"
                      className={classes.title}
                    >
                      <LangToggler id={item.name} />
                    </Typography>
                    <Typography
                      variant="caption"
                      className={classes.label}
                    >
                      <LangToggler id={item.label} />
                    </Typography>

                    <Typography
                      variant="caption"
                      className={classes.description}
                    >
                      <ShowMoreText
                          anchorClass={classes.expand}
                          expanded={false}
                          less={verbiage(item.less)[language]}
                          lines={3}
                          more={verbiage(item.more)[language]}
                          width={"100%"}
                      >
                        <LangToggler id={item.description} />
                      </ShowMoreText>
                    </Typography>
                  </CardContent>
                </div>
              </Grid>
            </Grid>
          </Grid>
        ),
      });
    });
  }

  return (
    <SectionBlock variant={variant} className={classes.container}>
      <Grid
        container
        spacing={8}
      >
        <Grid item sm={12} md={12}>
          <Callout
            align="center"
            title={copy.title}
            subtitle={copy.body}
            variant={variant}
            transparent
          />
        </Grid>
        {items.map((item, i) => item.render())}
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(ClerksLayout);
