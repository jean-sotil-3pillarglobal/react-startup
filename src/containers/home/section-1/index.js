import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

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
import { BaseButton } from './../../../components/commons/button';
import BaseInput from './../../../components/commons/input';

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
  formControl: {
    width: '100%',
  },
  hero: {
    color: theme.palette.common.white,
    minHeight: '595px',
    padding: '0 2em 1em 2em',
  },
  quote: {
    padding: `${theme.spacing.unit * 6}px`,
  },
  subtitle: {
    margin: `${theme.spacing.unit * 5}px 0`,
  },
  title: {
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'hero';
// copy:
// 1 title
// 1 subtitle
// 1 cta
// 2 images
const copyTree = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'cta',
  'items-2-image',
  'label',
  'subtitle',
  'title',
]);

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layers: [],
      zipcode: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount () {
    const { selectedVariantVerbiage } = this.props;
    const amount = [0.1, 0.2];

    this.setState({
      layers: copyTree.items.map((item, i) => ({
        image: selectedVariantVerbiage(item.image), // id
      })),
    });
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
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
          className={classes.hero}>
          <Grid
            item
            sm={11}
            md={9}
            lg={9}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={8}>
              <Grid
                item
                md={12}
                className={classes.content}>
                <Typography variant="h1" align="left" className={classes.title}>
                  <LangToggler id={copyTree.title}></LangToggler>
                </Typography>
                <Typography variant="subtitle2" align="left" className={classes.subtitle}>
                  <LangToggler id={copyTree.subtitle}></LangToggler>
                </Typography>
              </Grid>
              <Grid
                item>
                <BaseInput
                  id={'zipcode'}
                  key={'zipcode'}
                  name={'zipcode'}
                  type={'text'}
                  langid={copyTree.label}
                  fieldType={'input'}
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </Grid>
              <Grid
                item>
                <BaseButton
                  langId={copyTree.cta}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}


// map state to props
function mapStateToProps (state) {
  return {
    selectedVariantVerbiage: state.selectedVariantVerbiage,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Hero));
