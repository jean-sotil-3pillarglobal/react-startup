
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import {
  Grid,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
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
  },
  callout: {
    bottom: theme.spacing.unit * 4,
    position: 'relative',
    zIndex: 1,
  },
  content: {
    marginTop: theme.spacing.unit * 14,
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
    bottom: theme.spacing.unit * 20,
    position: 'absolute',
    right: theme.spacing.unit * 6,
    width: '30%',
    zIndex: -1,
  },
});

const NODE = 'home';
const SLOT = 'section_3';

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
      <SectionBlock variant="light">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.items}
          spacing={24}>
          <Grid
            item
            sm={10}
            md={12}
            lg={12}>
            <Callout
              title={<LangToggler id={copy.title} />}
              subtitle={<LangToggler id={copy.subtitle} />}
              variant="primary"
              className={classes.callout}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                spacing={8}
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
                  sm={6}
                  md={6}
                  lg={6}>
                  <LangButton
                    disabled={type === ''}
                    lang={copy.cta}
                    onClick={this.handleClick}
                    variant={VARIANTS.OUTLINED}
                    typeButton={TYPES.PRIMARY}>
                    <Icon name="keyboard_arrow_right" className={classes.icon} />
                  </LangButton>
                  <SVGComponent src="/static/svg/team_work.svg" className={classes.svg} color="secondary" />
                </Grid>
              </Grid>
            </Callout>
          </Grid>
        </Grid>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
