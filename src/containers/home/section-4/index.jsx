
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import {
  Grid,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

// components
import { LangButton, TYPES, VARIANTS } from './../../../components/commons/button';
import { LangInput } from './../../../components/commons/input';
import Callout from './../../../components/commons/callout/';
import Icon from './../../../components/commons/icon';
import SVGComponent from './../../../components/commons/svg';
import SectionBlock from './../../../components/layouts/section';

const styles = theme => ({
  background: {},
  button: {
    margin: 0,
    width: '100%',
  },
  callout: {
    bottom: theme.spacing(4),
    position: 'relative',
    zIndex: 1,
  },
  content: {
    marginTop: theme.spacing(4),
    width: '100%',
  },
  icon: {
    fontSize: '1rem',
  },
  image: {
    width: '100%',
    zIndex: -1,
  },
  svg: {
    bottom: theme.spacing(20),
    right: theme.spacing(6),
    width: '100%',
  },
});

const NODE = 'home';
const SLOT = 'section_4';

const copy = LangGenerateTree([NODE, SLOT], [
  'cta',
  'placeholder_select',
  'select_options-4-label',
  'select_options-4-value',
  'select',
  'subtitle',
  'title',
]);

class SectionA extends Component {
  state = {
    type: '',
  }

  componentDidMount = () => {
    this.myRef = React.createRef();
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleClick = (evt) => {
    evt.preventDefault();

    const { history } = this.props;
    const { type } = this.state;

    history.push(`/get-a-quote/${type}`);
  }

  props: {
    history: any,
    classes: Object,
    proxy: Object,
  }

  render () {
    const { classes, proxy } = this.props;
    const { type } = this.state;
    const { verbiage, language } = proxy;
    const { handleChange } = this;

    return (
      verbiage &&
      <SectionBlock variant="dark">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.items}
          spacing={(10)}>
          <Grid
            item
            sm={10}
            md={8}
            lg={8}>
            <Callout
              title={copy.title}
              subtitle={copy.subtitle}
              variant="primary"
              className={classes.callout}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                spacing={(10)}
                className={classes.content}>
                <Grid
                  item
                  sm={12}
                  md={12}
                  lg={12}>
                  <LangInput
                    error={undefined}
                    fieldType="select"
                    id="type"
                    key="type"
                    lang={verbiage(copy.select)}
                    name="type"
                    type="text"
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
                  md={12}
                  lg={12}>
                  <LangButton
                    className={classes.button}
                    disabled={type === ''}
                    lang={copy.cta}
                    onClick={this.handleClick}
                    variant={VARIANTS.OUTLINED}
                    typeButton={TYPES.PRIMARY}>
                    <Icon name="keyboard_arrow_right" className={classes.icon} />
                  </LangButton>
                </Grid>
              </Grid>
            </Callout>
          </Grid>
          <Grid
            item
            sm={10}
            md={4}
            lg={4}>
            <SVGComponent src="/static/svg/team_work.svg" className={classes.svg} color="secondary" />
          </Grid>
        </Grid>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
