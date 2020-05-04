import React from 'react';

import {
  Box,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Link } from 'react-scroll';

import { constants } from './../../../providers/config';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import { LangButton } from './../../../components/commons/button';
import Callout from './../../../components/commons/callout/';
import Icon from './../../../components/commons/icon';
import SectionBlock from './../../../components/layouts/section';

const variant = {
  variant: 'light2',
};

const styles = theme => ({
  body: {
    color: ThemeColor(variant, theme),
    margin: '0 auto',
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
    color: ThemeColor(variant, theme),
    marginBottom: `${theme.spacing(6)}px`,
  },
  subtitle2: {
    color: ThemeColor(variant, theme),
    marginBottom: `${theme.spacing(2)}px`,
  },
  svg: {
    margin: `${theme.spacing(12)}px 0`,
  },
  title: {
    color: ThemeColor(variant, theme),
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
          <Callout
            align="center"
            title={copy.title}
            subtitle={copy.subtitle}
            variant={variant.variant}
            transparent
          >
            <Typography
              variant="body1"
              className={classes.body}>
              <LangToggler id={copy.body} />
            </Typography>
            <Link
              smooth
              spy
              to={constants.LINK_SECTION_4}
            >
              <Box p={1} key={copy.label}>
                <LangButton
                  className={classes.cta}
                  lang={copy.cta}
                  variant="dark">
                </LangButton>
              </Box>
            </Link>
          </Callout>
        </Grid>
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(SectionC);
