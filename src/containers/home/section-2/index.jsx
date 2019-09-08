import { Component, Fragment } from 'react';

import {
  Card,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateId from './../../../providers/utils/lang.generate.id';
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';

// components
import Icon from './../../../components/commons/icon/index.jsx';
import SectionBlock from './../../../components/layouts/section/index.jsx';
import SVGComponent from './../../../components/commons/svg/index.jsx';
import { LangButton, TYPES, VARIANTS } from './../../../components/commons/button/index.jsx';

const styles = theme => ({
  body: {
    margin: '0 auto',
    width: '80%',
  },
  body2: {
    marginBottom: `${theme.spacing.unit * 6}px`,
  },
  card: {
    background: theme.palette.background.transparent,
    boxShadow: 'initial',
    maxWidth: '100%',
    textAlign: 'center',
  },
  container: {
    padding: 0,
    textAlign: 'center',
  },
  cta: {
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  icon: {
    fontSize: '3.4em',
  },
  items: {
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: `${theme.spacing.unit * 6}px`,
  },
  subtitle2: {
    marginBottom: `${theme.spacing.unit * 2}px`,
  },
  svg: {
    margin: `${theme.spacing.unit * 8}px 0`,
  },
  title: {
    marginBottom: `${theme.spacing.unit * 6}px`,
  },
});

const NODE = 'home';
const SLOT = 'section_2';
// copy:
// 1 title
// 1 body
// 4 items
const copy = LangGenerateTree([NODE, SLOT], [
  'body',
  'items-3-body',
  'items-3-cta',
  'items-3-cta_link',
  'items-3-svg',
  'items-3-title',
  'subtitle',
  'title',
  'svg',
]);

class SectionB extends Component {
  render () {
    const { classes, proxy } = this.props;
    const { verbiage } = proxy;

    return (
      verbiage &&
      <SectionBlock variant="light">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.container}>
          <Grid item
            sm={12}
            md={12}>
            <Typography
              variant="h2"
              className={classes.title}>
              <LangToggler id={copy.title}></LangToggler>
            </Typography>
            <Typography
              variant="h3"
              className={classes.subtitle}>
              <LangToggler id={copy.subtitle}></LangToggler>
            </Typography>
            <Typography
              variant="body1"
              className={classes.body}>
              <LangToggler id={copy.body}></LangToggler>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          {copy.items.map((item, i) => (
            <Grid
              item
              sm={12}
              md={4}
              lg={4}
              key={`${i}_item_x`}>
              <Grid container className={classes.items}>
                <Grid item
                  xs={12}
                  sm={12}
                  md={12}>
                  <SVGComponent src={verbiage(copy.svg)} className={classes.svg}/>
                  <Typography
                    variant="h4" className={classes.subtitle2}>
                    <LangToggler id={item.title}></LangToggler>
                  </Typography>
                </Grid>
                <Grid item
                  xs={12}
                  sm={12}
                  md={12}>
                  <Typography
                    variant="body1" className={classes.body2}>
                    <LangToggler id={item.body}></LangToggler>
                  </Typography>
                  {verbiage(item.cta) &&
                    <LangButton
                      lang={item.cta}
                      onClick={evt => this.handleClick(evt, copy.cta_link)}
                      variant={VARIANTS.OUTLINED}
                      typeButton={TYPES.PRIMARY}>
                    </LangButton>
                  }
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(SectionB);
