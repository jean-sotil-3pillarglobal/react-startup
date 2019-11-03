
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import ThemeBackground from './../../../providers/utils/theme.background';

const variant = {
  variant: 'primary',
};

const styles = theme => ({
  container: {
    background: ThemeBackground(variant, theme, 'light'),
    flexGrow: 1,
    paddingBottom: '50vh',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '50vh',
  },
  loading: {
    margin: '0 auto',
  },
});

const Loading = (props: {
  classes: Object
}) => {
  const {
    classes,
  } = props;

  return (
    <div className={props.classes.container}>
      <LinearProgress className={classes.loading} color="secondary" />
    </div>
  );
};

export default withStyles(styles)(Loading);
