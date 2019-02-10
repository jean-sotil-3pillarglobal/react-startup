import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from '../../../providers/lang/toggler';

// components
import { BaseButton } from './../../../components/commons/button';

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
    background: theme.palette.background.light,
    borderRadius: '0',
    boxShadow: 'none',
    marginTop: '-90px',
    padding: '64px',
  },
  subtitle: {
    marginBottom: '80px',
  },
  title: {
    marginBottom: '20px',
  },
});

class Products extends Component {
  render () {
    const { classes } = this.props;
    const items = [{
      cta: 'containers.features.cta1',
      description: 'containers.home.items.description1',
      icon: 'auto',
      title: 'containers.home.items.title1',
      type: 'auto',
    }, {
      cta: 'containers.home.items.cta2',
      description: 'containers.home.items.description2',
      icon: 'dental',
      title: 'containers.home.items.title2',
      type: 'dental',
    }, {
      cta: 'containers.home.items.cta3',
      description: 'containers.home.items.description3',
      icon: 'health',
      title: 'containers.home.items.title3',
      type: 'health',
    }, {
      cta: 'containers.home.items.cta4',
      description: 'containers.home.items.description4',
      icon: 'boat',
      title: 'containers.home.items.title4',
      type: 'boat',
    }];

    return (
      <Fragment>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid
            item
            sm={10}
            md={8}
            lg={8}>
            <Paper
              className={classes.items}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid
                  item
                  sm={12}
                  md={12}
                  lg={12}>
                  <Typography
                    variant="h2"
                    className={classes.title}>
                    <LangToggler id="tbd"></LangToggler>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={classes.subtitle}>
                    <LangToggler id="tbd"></LangToggler>
                  </Typography>
                </Grid>
                {items.map(product => (
                  <Grid
                    item
                    sm={6}
                    md={3}
                    lg={3}
                    key={product.type}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardContent>
                          <Icon
                            className={classes.icon}
                          >call</Icon>
                          <Typography gutterBottom variant="h5" component="h2">
                            <LangToggler id={product.title}></LangToggler>
                          </Typography>
                          <Typography component="p">
                            <LangToggler id={product.description}></LangToggler>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <BaseButton langId={product.cta}/>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default connect(null, null)(withStyles(styles)(Products));
