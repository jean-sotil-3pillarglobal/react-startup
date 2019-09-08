import { Component, Fragment } from 'react';

import {
  Button,
  Grid,
  Icon,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
import LangGenerateId from './../../../providers/utils/lang.generate.id';
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

// components
import SectionBlock from './../../../components/layouts/section/index.jsx';
import { LangButton } from './../../../components/commons/button/index.jsx';
import { SmartImg } from './../../../components/commons/img/index.jsx';

const styles = theme => ({
  card: {
    background: theme.palette.background.transparent,
    boxShadow: 'initial',
    maxWidth: '100%',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3.4em',
  },
  items: {
    borderRadius: '0',
    boxShadow: 'none',
  },
  subtitle: {
    marginBottom: '80px',
  },
  title: {
    marginBottom: `${theme.spacing.unit * 6}px`,
  },
});

const NODE = 'home';
const SLOT = 'section_4';
// copy:
// 1 title
// 4 items
const copy = LangGenerateTree([NODE, SLOT], [
  'title',
  'items-4-body',
  'items-4-cta',
  'items-4-title',
  'items-4-image',
]);

class SectionC extends Component {
  blog (row) {
    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={8}>
        <Grid container spacing={16}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}>
            <Typography variant="h3">
              <LangToggler id={row.title}></LangToggler>
            </Typography>
            <Typography variant="subtitle2">
              <LangToggler id={row.body}></LangToggler>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}>
            <LangButton
              lang={row.cta} />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  colFromLeft (row) {
    const { classes, proxy } = this.props;

    return (
      <Fragment key={row.title}>
        <Grid item
          xs={12}
          sm={12}
          md={4}>
          <SmartImg proxy={proxy} src={row.image} />
        </Grid>
        {this.blog(row)}
      </Fragment>);
  }

  colFromRight (row) {
    const { classes, proxy } = this.props;

    return (
      <Fragment key={row.title}>
        {this.blog(row)}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}>
          <SmartImg proxy={proxy} src={row.image} />
        </Grid>
      </Fragment>);
  }

  render () {
    const { classes } = this.props;

    return (
      <SectionBlock>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.items}
          spacing={24}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}>
            <Typography
              variant="h2"
              className={classes.title}>
              <LangToggler id={copy.title}></LangToggler>
            </Typography>
          </Grid>
          {copy.items.map((row, index) => {
            return index % 2 === 0 ? this.colFromLeft(row) : this.colFromRight(row);
          })}
        </Grid>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(SectionC);
