import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Grid,
  Icon,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
import LangGenerateId from './../../../providers/utils/lang.generate.id';
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

// components
import { LangButton } from './../../../components/commons/button';
import { SmartImg } from './../../../components/commons/img';

const styles = theme => ({
  card: {
    background: theme.palette.background.transparent,
    boxShadow: 'initial',
    maxWidth: '100%',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3.4em',
  },
  items: {
    borderRadius: '0',
    boxShadow: 'none',
    padding: '0 2em 1em 2em',
  },
  subtitle: {
    marginBottom: '80px',
  },
  title: {
    marginBottom: `${theme.spacing.unit * 6}px`,
  },
});

const NODE = 'home';
const SLOT = 'section_3';
// copy:
// 1 title
// 4 items
const copy = LangGenerateTree([NODE, SLOT], [
  'title',
  'items-4-body',
  'items-4-cta',
  'items-4-title',
]);

class SectionC extends Component {
  blog (row) {
    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={8}>
        <Grid container spacing={16}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}>
            <Typography variant="h3">
              <LangToggler id={row.title}></LangToggler>
            </Typography>
            <Typography variant="subtitle2">
              <LangToggler id={row.body}></LangToggler>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}>
            <LangButton
              lang={row.cta} />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  colFromLeft (row) {
    const { classes, proxy } = this.props;
    const { device } = proxy;

    return (
      <Fragment key={row.title}>
        <Grid item
          xs={12}
          sm={12}
          md={4}>
          <SmartImg device={device} src={'image-test.jpg'} />
        </Grid>
        {this.blog(row)}
      </Fragment>);
  }

  colFromRight (row) {
    const { classes, proxy } = this.props;
    const { device } = proxy;

    return (
      <Fragment key={row.title}>
        {this.blog(row)}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}>
          <SmartImg device={device} src={'image-test.jpg'} />
        </Grid>
      </Fragment>);
  }

  render () {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.items}>
          <Grid
            item
            sm={11}
            md={9}
            lg={9}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={24}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}>
                <Typography
                  variant="h2"
                  className={classes.title}>
                  <LangToggler id={copy.title}></LangToggler>
                </Typography>
              </Grid>
              {copy.items.map((row, index) => {
                return index % 2 === 0 ? this.colFromLeft(row) : this.colFromRight(row);
              })}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SectionC);
