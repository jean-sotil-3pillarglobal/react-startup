
import { withRouter } from 'react-router-dom';
import React, { Fragment } from 'react';

import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';
import ThemeColor from './../../../providers/utils/theme.color';

// commons
import Callout from './../../../components/commons/callout/';
import ContactFormLayout from './../../../components/layouts/commons/contact_1';

import BannerA from './../banner-1';

// components
import SectionBlock from './../../../components/layouts/section';

const variant = 'light';

const styles = theme => ({
  background: {},
  button: {
    margin: 0,
    width: '100%',
  },
  container: {
    padding: 0,
    position: 'relative',
  },
  title: {
    color: ThemeColor({ variant }, theme),
    margin: `0 0 ${theme.spacing(10)}px 0`,
    textAlign: 'right',
    textTransform: 'capitalize',
  },
});

const NODE = 'home';
const SLOT = 'section_4';

const copy = LangGenerateTree([NODE, SLOT], [
  'id',
  'title',
]);

const SectionD = (props: {
  classes: Object,
  proxy: Object,
}) => {
  const {
    classes,
    proxy,
  } = props || {};

  const {
    verbiage,
  } = proxy;

  return (
    verbiage &&
    (
      <Fragment>
        <BannerA proxy={proxy} />
        <SectionBlock className={classes.container} variant={variant} id={verbiage(copy.id)}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            spacing={6}>
            <Grid
              item
              sm={10}
              md={6}
              lg={6}>
              <Fragment>
                <Callout
                  align="left"
                  title={copy.title}
                  variant={variant}
                  transparent
                  className={classes.title}
                />
                <ContactFormLayout
                  proxy={proxy}
                  variant="primary"
                />
              </Fragment>
            </Grid>
          </Grid>
        </SectionBlock>
      </Fragment>
    )
  );
};

export default withStyles(styles)(withRouter(SectionD));
