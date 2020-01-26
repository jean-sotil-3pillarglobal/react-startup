import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

import {
  Grid,
  withStyles,
} from '@material-ui/core';

const styles = () => ({});

function Footer (props: {
  language: String,
}) {
  const {
    language,
  } = props;

  const history = useHistory();

  const handleChange = (evt) => {
    const { target } = evt;
    const { value } = target;

    if (language !== value) {
      history.push(`/${value}`);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} align="center">
        <select
          onChange={handleChange}
          value={language}>
          <option value="es">es</option>
          <option value="en">en</option>
        </select>
      </Grid>
    </Grid>
  );
}

// map state to props
function mapStateToProps (state) {
  return {
    language: state.language,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Footer));
