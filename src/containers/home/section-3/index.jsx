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
import { LangButton } from './../../../components/commons/button/index.jsx';

const styles = theme => ({
  card: {
    background: theme.palette.background.transparent,
    boxShadow: 'initial',
    maxWidth: '100%',
    textAlign: 'center',
  },
  cta: {
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  icon: {
    fontSize: '3.4em',
  },
  items: {
    padding: 0,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: `${theme.spacing.unit * 8}px`,
  },
  svg: {
    marginBottom: `${theme.spacing.unit * 8}px`,
  },
  title: {
    marginBottom: `${theme.spacing.unit * 6}px`,
  },
});

const NODE = 'home';
const SLOT = 'section_3';
// copy:
// 1 title
// 1 body
// 4 items
const copy = LangGenerateTree([NODE, SLOT], [
  'title',
  'body',
  'items-4-body',
  'items-4-cta',
  'items-4-ico',
  'items-4-title',
  'items-4-type',
  'svg',
]);

class SectionB extends Component {
  render () {
    const { classes, proxy } = this.props;
    const { verbiage } = proxy;

    return (
      verbiage &&
      <SectionBlock variant="secondary">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.items}>
          <Grid item
            sm={12}
            md={12}>
            <Typography
              variant="h2"
              className={classes.title}>
              <LangToggler id={copy.title}></LangToggler>
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.subtitle}>
              <LangToggler id={copy.body}></LangToggler>
            </Typography>
            <SVGComponent src={verbiage(copy.svg)} className={classes.svg}/>
            <Grid container spacing={24}>
              {copy.items.map(item => (
                <Grid
                  item
                  sm={12}
                  md={3}
                  lg={3}
                  key={item.type}>
                  <Card className={classes.card}>
                    <Grid container>
                      <Grid item
                        xs={12}
                        sm={12}
                        md={12}>
                        <Icon name={verbiage(item.ico)} className={classes.icon} />
                      </Grid>
                      <Grid item
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.cta}>
                        <LangButton lang={item.cta}/>
                      </Grid>
                      <Grid item
                        xs={12}
                        sm={12}
                        md={12}>
                        <Typography
                          variant="body1">
                          <LangToggler id={item.body}></LangToggler>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(SectionB);
