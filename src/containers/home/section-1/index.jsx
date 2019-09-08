import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangGenerateId from './../../../providers/utils/lang.generate.id';

// components
import Icon from './../../../components/commons/icon/index.jsx';
import SVGComponent from './../../../components/commons/svg/index.jsx';
import { LangButton, TYPES, VARIANTS } from './../../../components/commons/button/index.jsx';
import { LangInput } from './../../../components/commons/input/index.jsx';

import SectionBlock from './../../../components/layouts/section/index.jsx';

const styles = theme => ({
  button: {
    margin: 0,
  },
  content: {
    padding: `${theme.spacing.unit * 0}px 0 ${theme.spacing.unit * 32}px 0`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  formControl: {
    width: '100%',
  },
  hero: {
    position: 'relative',
    zIndex: 1,
  },
  icon: {
    fontSize: '1rem',
  },
  quote: {
    padding: `${theme.spacing.unit * 6}px`,
  },
  subtitle: {
    marginBottom: `${theme.spacing.unit * 9}px`,
    zIndex: 1,
  },
  svg: {
    left: '45%',
    position: 'absolute',
    top: theme.spacing.unit * 20,
    width: '50%',
    zIndex: -1,
  },
  title: {
    marginBottom: `${theme.spacing.unit * 8}px`,
    zIndex: 1,
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
  'select_options-4-value',
  'select_options-4-label',
  'subtitle',
  'title',
  'placeholder_zipcode',
  'placeholder_select',
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

  componentDidMount = () => {
    this.myRef = React.createRef();
  }

  handleClick = (evt) => {
    const { history } = this.props;
    const { type } = this.state;

    history.push(`/get-a-quote/${type}`);
  }

  render () {
    const { classes, proxy } = this.props;
    const { type } = this.state;
    const { verbiage, language } = proxy;
    const { handleChange } = this;
    let layers = [];

    // example: getting images from verbiage
    if (verbiage) {
      layers = copy.items.map(item => verbiage(item.image));
    }

    return (
      verbiage &&
      <SectionBlock ref={this.myRef} className={classes.hero}>
        <Fragment>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
            spacing={8}
            className={classes.content}>
            <Grid
              item
              md={12}>
              <Typography variant="h1" align="left" className={classes.title}>
                <LangToggler id={copy.title}></LangToggler>
              </Typography>
              <Typography variant="subtitle1" align="left" className={classes.subtitle}>
                <LangToggler id={copy.subtitle}></LangToggler>
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={2}
              lg={2}>
              <LangInput
                error={undefined}
                fieldType={'input'}
                id={'zipcode'}
                key={'zipcode'}
                lang={verbiage(copy.label)}
                name={'zipcode'}
                type={'text'}
                placeholder={verbiage(copy.placeholder_zipcode)}
                value={this.state.zipcode || ''}
                proxy={{
                  handleChange,
                  language,
                  verbiage,
                }} />
            </Grid>
            <Grid
              item
              sm={12}
              md={3}
              lg={3}>
              <LangInput
                error={undefined}
                fieldType={'select'}
                id={'type'}
                key={'type'}
                lang={verbiage(copy.select)}
                name={'type'}
                type={'text'}
                placeholder={verbiage(copy.placeholder_select)}
                value={this.state.type || ''}
                options={copy.select_options || {}}
                proxy={{
                  handleChange,
                  language,
                  verbiage,
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
                onClick={this.handleClick}
                variant={VARIANTS.OUTLINED}
                typeButton={TYPES.PRIMARY}>
                <Icon name={'angle-right-b'} className={classes.icon} />
              </LangButton>
            </Grid>
          </Grid>
          <SVGComponent src="/static/svg/team_work.svg" className={classes.svg}/>
        </Fragment>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
