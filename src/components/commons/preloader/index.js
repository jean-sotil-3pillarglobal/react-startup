
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  linear: {
    background: theme.palette.primary.main,
  },
  root: {
    flexGrow: 1,
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '50vh',
    visibility: 'visible',
  },
});

const Loading = (props: {
  classes: Object
}) => (
  <div className={props.classes.container}>
    <LinearProgress />
  </div>
);

export default withStyles(styles)(Loading);
