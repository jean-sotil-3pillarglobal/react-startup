import { withRouter } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Parallax } from 'react-parallax';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

// components
import NavbarSimple from './../../../components/commons/navbar/simple';

const styles = theme => ({
  headroom: {
    padding: `${theme.spacing(2)}px 0`,
    width: '100%',
  },
  image: {
    background: 'transparent',
    height: 500,
    padding: 0,
    position: 'relative',
    zIndex: 1,
  },
});

const NODE = 'services';
const SLOT = 'section_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'back',
  'promos',
  'services',
]);

function SectionA (props: {
  children: any,
  classes: Object,
  history: any,
  proxy: Object,
  service: Object,
}) {
  const {
    children,
    classes,
    history,
    proxy,
    service,
  } = props;

  return (
    <Fragment>
      <NavbarSimple
        copy={copy}
        history={history}
        id={service.id}
        proxy={proxy}
        title={service.title}
      />
      <Parallax bgImage={service.background} strength={500} className={classes.background}>
        <Paper className={classes.image} />
      </Parallax>
      {children}
    </Fragment>
  );
}

export default withStyles(styles)(withRouter(SectionA));
