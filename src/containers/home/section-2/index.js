import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  Button,
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
import { BaseButton } from './../../../components/commons/button';
import Icon from './../../../components/commons/icon';

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
    padding: `0 2em ${theme.spacing.unit * 10}px 2em`,
  },
  subtitle: {
    marginBottom: `${theme.spacing.unit * 8}px`,
  },
  title: {
    marginBottom: `${theme.spacing.unit * 6}px`,
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'features';
// copy:
// 1 title
// 4 items
const copyTree = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'title',
  'body',
  'items-4-body',
  'items-4-cta',
  'items-4-ico',
  'items-4-title',
  'items-4-type',
]);

class Products extends Component {
  render () {
    const { classes, selectedVariantVerbiage } = this.props;

    return (
      <Fragment>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.items}>
          <Grid
            item
            sm={11}
            md={9}
            lg={9}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item
                sm={12}
                md={12}>
                <Typography
                  variant="h2"
                  className={classes.title}>
                  <LangToggler id={copyTree.title}></LangToggler>
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={classes.subtitle}>
                  <LangToggler id={copyTree.body}></LangToggler>
                </Typography>
                <Grid container spacing={24}>
                  {copyTree.items.map(item => (
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
                            <Icon name={selectedVariantVerbiage(item.ico)} className={classes.icon} />
                          </Grid>
                          <Grid item
                            xs={12}
                            sm={12}
                            md={12}
                            className={classes.cta}>
                            <BaseButton langId={item.cta}/>
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
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    selectedVariantVerbiage: state.selectedVariantVerbiage,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Products));
