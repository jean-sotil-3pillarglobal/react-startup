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
import SmartImg from './../../../components/commons/img';

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

const NODE_ROOT = 'components';
const NODE_TYPE = 'content';
// copy:
// 1 title
// 4 items
const copyTree = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'title',
  'items-4-body',
  'items-4-cta',
  'items-4-title',
]);

class Content extends Component {
  colFromLeft (row) {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid item
          xs={12}
          sm={12}
          md={4}>
          <SmartImg src={'image-test.jpg'} />
        </Grid>
        <Grid item
          xs={12}
          sm={12}
          md={8}>
          <Typography variant="subtitle2">
            <LangToggler id={row.body}></LangToggler>
          </Typography>
        </Grid>
      </Fragment>);
  }

  colFromRight (row) {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid item
          xs={12}
          sm={12}
          md={8}>
          <Typography variant="subtitle2">
            <LangToggler id={row.body}></LangToggler>
          </Typography>
        </Grid>
        <Grid item
          xs={12}
          sm={12}
          md={4}>
          <SmartImg src={'image-test.jpg'} />
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
          className={classes.items}
          spacing={24}>
          <Grid
            item
            sm={12}
            md={12}
            lg={12}>
            <Typography
              variant="h2"
              className={classes.title}>
              <LangToggler id={copyTree.title}></LangToggler>
            </Typography>
          </Grid>
          {copyTree.items.map((row, index) => {
            return index % 2 === 0 ? this.colFromLeft(row) : this.colFromRight(row);
          })}
        </Grid>
      </Fragment>
    );
  }
}

export default connect(null, null)(withStyles(styles)(Content));
