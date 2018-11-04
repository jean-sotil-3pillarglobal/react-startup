import $ from 'jquery';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  barColorPrimary: {
    backgroundColor: '#000',
  },
  colorPrimary: {
    backgroundColor: '#fff',
  },
  root: {
    flexGrow: 1,
  },
};

class PreLoader extends Component {
  componentDidMount() {
    $('#preloader').delay(1000).fadeOut('ease-out');
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="preloader">
        <LinearProgress />
      </div>
    );
  }
}

PreLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreLoader);
