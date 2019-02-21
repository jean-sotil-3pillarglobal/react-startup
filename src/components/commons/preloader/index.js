import $ from 'jquery';
import { Component } from 'react';

import {
  LinearProgress,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    visibility: 'visible',
  },
});

class PreLoader extends Component {
  componentDidMount() {
    $('#preloader').delay(1000).fadeOut('ease-out');
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div id="preloader" className={classes.root}>
        <LinearProgress color="primary" />
      </div>
    );
  }
}

export default withStyles(styles)(PreLoader);
