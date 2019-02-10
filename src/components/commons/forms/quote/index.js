import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from '../../../../providers/lang/toggler';

const styles = theme => ({
  area: {
    display: 'inline-block',
    margin: '0 auto',
    width: '70%',
  },
  formControl: {
    width: '100%',
  },
  quote: {
    padding: `4em ${theme.spacing.unit * 4}px`,
  },
});

class QuoteForm extends Component {
  constructor () {
    super();

    this.state = {
      area: '',
    };
  }

  render () {
    const { classes } = this.props;
    const { area } = this.state;
    return (
      <Fragment>
        <Paper
          className={classes.quote}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item
              sm={10}
              md={8}
              lg={8}
            >
              <Typography variant="h3" color="primary" align="center" gutterBottom>
                <LangToggler id="dummy.title"></LangToggler>
              </Typography>
              <Typography variant="body2" color="primary" align="center" paragraph>
                <LangToggler id="dummy.subtitle"></LangToggler>
              </Typography>
              <TextField
                value={this.state.area}
                label="Zip Code"
                className={classes.area}
                fullWidth
              />
              <FormControl className={classes.formControl}>
                <Select
                  value='auto'
                  inputProps={{
                    id: 'type',
                    name: 'type',
                  }}
                >
                  <MenuItem value={'auto'}>
                    <LangToggler id="dummy.button"></LangToggler>
                  </MenuItem>
                  <MenuItem value={'health'}>
                    <LangToggler id="dummy.button"></LangToggler>
                  </MenuItem>
                  <MenuItem value={'dental'}>
                    <LangToggler id="dummy.button"></LangToggler>
                  </MenuItem>
                  <MenuItem value={'home'}>
                    <LangToggler id="dummy.button"></LangToggler>
                  </MenuItem>
                  <MenuItem value={'renters'}>
                    <LangToggler id="dummy.button"></LangToggler>
                  </MenuItem>
                  <MenuItem value={'life'}>
                    <LangToggler id="dummy.button"></LangToggler>
                  </MenuItem>
                  <MenuItem value={'medicare'}>
                    <LangToggler id="dummy.button"></LangToggler>
                  </MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" className={classes.button} fullWidth>
                <LangToggler id="dummy.button"></LangToggler>
              </Button>
              <Typography variant="body2" color="primary" align="center" paragraph>
                <LangToggler id="dummy.caption"></LangToggler>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

export default connect(null, null)(withStyles(styles)(QuoteForm));
