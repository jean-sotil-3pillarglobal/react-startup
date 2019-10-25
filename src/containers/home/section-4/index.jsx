
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

import {
  constants,
} from './../../../providers/config';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';
import ThemeColor from './../../../providers/utils/theme.color';

// commons
import ContactFormLayout from './../../../components/layouts/commons/contact_1';

// components
import SectionBlock from './../../../components/layouts/section';
import SVGComponent from './../../../components/commons/svg';

const variant = 'dark';

const {
  SERVICE_1,
} = constants;

const styles = theme => ({
  background: {},
  button: {
    margin: 0,
    width: '100%',
  },
  svg: {
    bottom: theme.spacing(20),
    right: theme.spacing(6),
    width: '100%',
  },
  title: {
    color: ThemeColor({ variant }, theme),
  },
});

const NODE = 'home';
const SLOT = 'section_4';

const copy = LangGenerateTree([NODE, SLOT], [
  'svg',
  'title',
]);

class SectionA extends Component {
  props: {
    classes: Object,
    document: Object,
    onBlur: Function,
    onChange: Function,
    onSubmit: Function,
    proxy: Object,
  }

  render () {
    const {
      classes,
      document,
      onBlur,
      onChange,
      onSubmit,
      proxy,
    } = this.props;

    const {
      verbiage,
    } = proxy;

    return (
      verbiage &&
      <SectionBlock variant={variant}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={10}>
          <Grid
            item
            sm={12}
            md={12}
            lg={12}>
            <Typography
              variant="h2"
              className={classes.title}
            >
              <LangToggler id={copy.title} />
            </Typography>
          </Grid>
          <Grid
            item
            sm={10}
            md={7}
            lg={7}>
            <ContactFormLayout
              document={document}
              onBlur={onBlur}
              onChange={onChange}
              onSubmit={onSubmit}
              proxy={proxy}
              service={{
                id: SERVICE_1,
              }}
            />
          </Grid>
          <Grid
            item
            sm={10}
            md={5}
            lg={5}>
            <SVGComponent src={verbiage(copy.svg)} className={classes.svg} color="secondary" />
          </Grid>
        </Grid>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
