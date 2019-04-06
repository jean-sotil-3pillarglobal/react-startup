import { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangGenerateId from './../../../providers/utils/lang.generate.id';

// components
import { LangButton } from './../../../components/commons/button';
import { LangInput } from './../../../components/commons/input';

const styles = theme => ({
  button: {
    margin: 0,
  },
  content: {
    padding: `${theme.spacing.unit * 6}px 0 0 0`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'form_general';
// copy:
const copyTree = LangGenerateTree([NODE_ROOT, NODE_TYPE], []);

class SectionA extends Component {
  props: {
    history: any,
    classes: Object,
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render () {
    const { classes, proxy } = this.props;

    return (
      <Fragment>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid
            item
            sm={10}
            md={8}
            lg={8}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spancing={8}>
              <Grid
                item
                sm={12}
                md={8}
                lg={9}>
                <Typography variant="h1" align="left" className={classes.title}>
                  your quote here.
                </Typography>
              </Grid>
              <Grid
                item
                sm={12}
                md={4}
                lg={3}>
                <Typography variant="h1" align="left" className={classes.title}>
                  your quote here.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
