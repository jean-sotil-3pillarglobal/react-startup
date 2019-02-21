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
const NODE_TYPE = 'counter';
const NODE_TREE = [NODE_ROOT, NODE_TYPE];
// copy
const COPY_TREE = [
  LangGenerateId(NODE_TREE, 'title'),
  LangGenerateId(NODE_TREE, 'label1'),
  LangGenerateId(NODE_TREE, 'label2'),
  LangGenerateId(NODE_TREE, 'label3'),
  LangGenerateId(NODE_TREE, 'label4'),
];

class Counter extends Component {
  render () {
    const { classes } = this.props;
    const items = [{
      label: COPY_TREE[1],
    }, {
      label: COPY_TREE[2],
    }, {
      label: COPY_TREE[3],
    },];

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
              <LangToggler id={COPY_TREE[0]}></LangToggler>
            </Typography>
          </Grid>
          {items.map((row, index) => {
            return (
              <Grid item
                xs={12}
                sm={12}
                md={4}>
                <Typography variant="body2">
                  <LangToggler id={row.label}></LangToggler>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Fragment>
    );
  }
}

export default connect(null, null)(withStyles(styles)(Counter));
