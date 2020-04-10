
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
    marginBottom: theme.spacing(20),
    padding: 0,
  },
  title: {
    color: ThemeColor({ variant }, theme),
    margin: `${theme.spacing(4)}px 0`,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

const NODE = 'home';
const SLOT = 'section_4';

const copy = LangGenerateTree([NODE, SLOT], [
  'id',
  'title',
]);

const SectionA = (props: {
  classes: Object,
  proxy: Object,
}) => {
  const {
    classes,
    proxy,
  } = props;

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
            justify="center"
            alignItems="center"
            spacing={6}>
            <Grid
              item
              sm={12}
              md={12}
              lg={12}>
              <Typography
                variant="h3"
                className={classes.title}
              >
                <LangToggler id={copy.title} />
              </Typography>
            </Grid>
            <Grid
              item
              sm={10}
              md={6}
              lg={6}>
              <ContactFormLayout
                proxy={proxy}
                variant="primary"
              />
            </Grid>
          </Grid>
        </SectionBlock>
      </Fragment>
    )
  );
};

export default withStyles(styles)(withRouter(SectionA));
