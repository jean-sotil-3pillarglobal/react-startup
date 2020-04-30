import React from 'react';

import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import SectionBlock from './../../../components/layouts/section';

const variant = 'dark2';

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
  title: () => ({
    color: ThemeColor({ variant }, theme),
    marginBottom: `${theme.spacing(50)}px`,
  }),
});

const NODE = 'home';
const SLOT = 'section_5';
// copy:
// 1 title
// 4 items
const copy = LangGenerateTree([NODE, SLOT], [
  'id',
  'title',
]);

function SectionE (props: {
  classes: Object,
  proxy: Object,
}) {
  const {
    classes,
    proxy: {
      verbiage,
    },
  } = props;

  return (
    verbiage &&
    <SectionBlock id={verbiage(copy.id)} variant={variant}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.items}
        spacing={(10)}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}>
          <Typography
            variant="h2"
            className={classes.title}>
            <LangToggler id={copy.title} />
          </Typography>
        </Grid>
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(SectionE);
