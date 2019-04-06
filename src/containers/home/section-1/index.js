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
  stories: {
    width: '100%',
  },
  subtitle: {
    margin: `${theme.spacing.unit * 5}px 0`,
  },
  title: {
  },
});

const NODE = 'home';
const SLOT = 'section_1';
// copy:
// 1 title
// 1 subtitle
// 1 cta
// 2 images
const copy = LangGenerateTree([NODE, SLOT], [
  'cta',
  'items-2-image',
  'label',
  'select',
  'select_items-3-value',
  'select_items-3-label',
  'subtitle',
  'title',
]);

class SectionA extends Component {
  state = {
    layers: [],
    type: '',
  }

  props: {
    history: any,
    classes: Object,
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleClick = (evt) => {
    const { history } = this.props;
    const { type } = this.state;
    history.push('get-a-quote');
  }

  render () {
    const { classes, proxy } = this.props;
    const { type } = this.state;
    const { verbiage, language } = proxy;
    let layers = [];

    // example: getting images from verbiage
    if (verbiage) {
      layers = copy.items.map(item => verbiage(item.image));
    }

    return (
      <Fragment>
        (verbiage && language) &&
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
                  <LangToggler id={copy.title}></LangToggler>
                </Typography>
                <Typography variant="subtitle2" align="left" className={classes.subtitle}>
                  <LangToggler id={copy.subtitle}></LangToggler>
                </Typography>
              </Grid>
              <Grid
                item
                sm={12}
                md={2}
                lg={2}>
                <LangInput
                  id={'zipcode'}
                  key={'zipcode'}
                  name={'zipcode'}
                  type={'text'}
                  fieldType={'input'}
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                  verbiage={verbiage}
                  language={language}
                  lang={copy.label}
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </Grid>
              <Grid
                item
                sm={12}
                md={3}
                lg={3}>
                <LangInput
                  id={'type'}
                  key={'type'}
                  name={'type'}
                  type={'text'}
                  fieldType={'select'}
                  value={this.state.type}
                  onChange={this.handleChange}
                  verbiage={verbiage}
                  language={language}
                  lang={copy.select}
                  options={copy.select_items || []}
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </Grid>
              <Grid
                item
                sm={12}
                md={3}
                lg={3}>
                <LangButton
                  disabled={type === ''}
                  lang={copy.cta}
                  onClick={this.handleClick}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
