import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

import { LangButton, TYPES } from './../commons/button';
import Icon from './../commons/icon';
import SectionBlock from './../layouts/section';
import SmartImg from './../commons/img';

// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';
import LangToggler from './../../providers/lang/toggler';

// import ThemeBackground from './../../providers/utils/theme.background';
import ThemeColor from './../../providers/utils/theme.color';

const styles = theme => ({
  body: props => ({
    color: ThemeColor(props, theme),
    margin: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px 0`,
    textAlign: 'left',
  }),
  container: {
    minHeight: 'initial',
    padding: `${theme.spacing(10)}px 0`,
  },
  copyright: props => ({
    color: ThemeColor(props, theme),
    display: 'block',
    textAlign: 'right',
  }),
  fab: () => ({
    background: 'transparent',
  }),
  icon: () => ({}),
  iconFab: () => ({
    background: 'transparent',
  }),
  items: {
    margin: 0,
    padding: 0,
  },
  logo: {
    display: 'block',
    margin: 0,
    textAlign: 'right',
  },
  title: props => ({
    color: ThemeColor(props, theme),
    cursor: 'default',
    textAlign: 'left',
    textDecoration: 'underline',
  }),
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'footer';

// copy:
const copy = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'column-2-items',
  'column-2-title',
  'langs-2-value',
  'logo',
]);

function Footer (props: {
  classes: Object,
  language: String,
  proxy: Object,
  variant: String,
}) {
  const {
    classes,
    language,
    proxy,
    variant,
  } = props;

  const { verbiage } = proxy || {};

  const history = useHistory();

  const handleChange = (evt) => {
    const { target } = evt;
    const { value } = target;

    if (language !== value) {
      history.push(`/${value}`);
    }
  };

  return verbiage && (
    <SectionBlock className={classes.container} variant={variant}>
      <Grid
        alignItems="flex-start"
        className={classes.container}
        container
        direction="row"
        justify="center"
        spacing={8}
      >
        {copy.column.map(column => (
          <Grid
            item
            sm={12}
            md={5}
            lg={5}
            key={column.title}
          >
            <Typography
              variant="h3"
              className={classes.body}>
              <LangToggler id={column.title} />
            </Typography>
            <Grid
              alignItems="flex-start"
              className={classes.items}
              container
              direction="row"
              justify="flex-start"
            >
              {verbiage(column.items).map(item => (
                <Grid item key={item.label} sm={12} md={item.isFab ? 2 : 12}>
                  {item.isFab && (
                    <LangButton
                      href={item.link}
                      key={item.label}
                      typeButton={TYPES.FAB}
                      variant={variant}
                      className={classes.fab}
                    >
                      <Icon image={item.icon} className={classes.iconFab} />
                    </LangButton>
                  )}
                  {!item.isFab && (
                    <Grid
                      alignItems="center"
                      container
                      direction="row"
                      justify="center"
                    >
                      <Grid item sm={2}>
                        <Icon image={item.icon} className={classes.icon} variant={variant} />
                      </Grid>
                      <Grid item sm={10}>
                        <Typography
                          variant="caption"
                          className={classes.body}>
                          {item.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
        <Grid
          item
          lg={2}
          md={2}
          sm={12}
          className={classes.logo}
        >
          <SmartImg proxy={proxy} src={verbiage(copy.logo)} />
          <select
            onChange={handleChange}
            value={language}>
            {copy.langs.map(item => (
              <option key={item.value} value={verbiage(item.value)}>
                {verbiage(item.value)}
              </option>
            ))}
          </select>
        </Grid>
      </Grid>
      <Grid item sm={12} md={12}>
        <Typography
          variant="caption"
          className={classes.copyright}>
          2020 | ibudi Solutions
        </Typography>
      </Grid>
    </SectionBlock>
  ) || null;
}

// map state to props
function mapStateToProps (state) {
  return {
    language: state.language,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Footer));
