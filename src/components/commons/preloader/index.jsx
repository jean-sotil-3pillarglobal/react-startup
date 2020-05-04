
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    textAlign: 'center',
  },
  loading: {
    margin: '0 auto',
    width: '100%',
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
      <CircularProgress className={classes.loading} color="secondary" />
    </div>
  );
};

export default withStyles(styles)(Loading);
