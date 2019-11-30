import React from 'react';

import {
  Box,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

import { SectionLink } from 'react-scroll-section';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';
import { constants } from './../../../providers/config';

// components
import { LangButton } from './../../../components/commons/button';
import Icon from './../../../components/commons/icon';
import SectionBlock from './../../../components/layouts/section';
// import SVGComponent from './../../../components/commons/svg';

const {
  LINK_SECTION_4,
} = constants;

const variant = {
  variant: 'light',
};

const styles = theme => ({
  body: {
    margin: '0 auto',
  },
  body2: {
    marginBottom: `${theme.spacing(6)}px`,
  },
  card: {
    background: theme.palette.background.transparent,
    boxShadow: 'initial',
    maxWidth: '100%',
    textAlign: 'center',
  },
  container: {
    padding: 0,
    textAlign: 'center',
  },
  cta: {
    marginTop: theme.spacing(6),
  },
  icon: {
    fontSize: '3.4em',
  },
  items: {
    textAlign: 'center',
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(6)}px`,
  },
  subtitle2: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(2)}px`,
  },
  svg: {
    margin: `${theme.spacing(12)}px 0`,
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(6)}px`,
    marginTop: `${theme.spacing(6)}px`,
  },
});

const NODE = 'home';
const SLOT = 'section_2';

const copy = LangGenerateTree([NODE, SLOT], [
  'body',
  'cta',
  'id',
  'subtitle',
  'title',
]);

function SectionC (props: {
  classes: Object,
  proxy: Object,
}) {
  const { classes, proxy } = props;
  const { verbiage } = proxy;

  return (
    verbiage &&
    <SectionBlock id={verbiage(copy.id)} variant={variant.variant}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.container}>
        <Grid
          item
          sm={12}
          md={12}>
          <Typography
            variant="h2"
            className={classes.title}>
            <LangToggler id={copy.title} />
          </Typography>
          <Typography
            variant="h3"
            className={classes.subtitle}>
            <LangToggler id={copy.subtitle} />
          </Typography>
          <Typography
            variant="body1"
            className={classes.body}>
            <LangToggler id={copy.body} />
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <SectionLink section={LINK_SECTION_4} key={copy.label}>
            {link => (
              <Box p={1} onClick={link.onClick}>
                <LangButton
                  className={classes.cta}
                  lang={copy.cta}
                  variant="dark">
                  <Icon name="keyboard_arrow_right" className={classes.icon} />
                </LangButton>
              </Box>
            )}
          </SectionLink>
        </Grid>
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(SectionC);
