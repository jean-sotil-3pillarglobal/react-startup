import React from 'react';
import ShowMoreText from 'react-show-more-text';

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

const styles = theme => ({
  card: props => ({
    background: ThemeBackground(props, theme, 'dark'),
    borderRadius: '0 0 0 0',
    display: 'flex',
  }),
  container: {
    padding: `${theme.spacing(12)}px 0`,
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
  image: {
    padding: theme.spacing(1),
  },
  item: props => ({
    border: `1px solid ${ThemeBackground(props, theme, 'light')}`,
  }),
  label: props => ({
    background: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    display: 'block',
    padding: theme.spacing(1),
    margin: `${theme.spacing(4)}px 0`,
  }),
  media: {
    filter: 'grayscale(100%)',
    height: 400,
    padding: `${theme.spacing(2)}px`,
    width: '100%',
  },
  title: props => ({
    display: 'block',
    color: ThemeColor(props, theme),
    marginTop: theme.spacing(2),
  }),
});

const NODE = 'commons';
const SLOT = 'clerks_1';

const copy = LangGenerateTree([NODE, SLOT], [
  'clerks',
  'title',
]);

function ClerksLayout (props: {
  classes: Object,
  proxy: Object,
  variant: String,
}) {
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
            sm={item.size_sm || 12}
            md={item.size_md || 12}
            className={classes.item}
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
                    className={classes.media}
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
                      variant="body1"
                      className={classes.label}
                    >
                      <LangToggler id={item.label} />
                    </Typography>

                    <Typography
                      variant="caption"
                      className={classes.description}
                    >
                      <ShowMoreText
                          lines={3}
                          more='Show more'
                          less='Show less'
                          anchorClass=''
                          expanded={false}
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
      <Typography
        variant="h2"
        className={classes.title}
      >
        <LangToggler id={copy.title} />
      </Typography>
      <Grid
        container
        spacing={8}
      >
        {items.map((item, i) => item.render())}
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(ClerksLayout);
