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
    maxWidth: '100%',
    textAlign: 'center',
  },
  firstRow: {
    paddingBottom: '4px',
  },
  icon: {
    fontSize: '3.4em',
  },
  products: {
    background: theme.palette.background.light,
    borderRadius: '0',
    boxShadow: 'none',
    marginTop: '-90px',
    padding: '74px 0',
  },
});

class Products extends Component {
  render () {
    const { classes } = this.props;
    const products = [{
      cta: 'containers.home.products.cta1',
      description: 'containers.home.products.description1',
      icon: 'auto',
      title: 'containers.home.products.title1',
      type: 'auto',
    }, {
      cta: 'containers.home.products.cta2',
      description: 'containers.home.products.description2',
      icon: 'dental',
      title: 'containers.home.products.title2',
      type: 'dental',
    }, {
      cta: 'containers.home.products.cta3',
      description: 'containers.home.products.description3',
      icon: 'health',
      title: 'containers.home.products.title3',
      type: 'health',
    }, {
      cta: 'containers.home.products.cta4',
      description: 'containers.home.products.description4',
      icon: 'boat',
      title: 'containers.home.products.title4',
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
              className={classes.products}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.firstRow}>
                {products.map(product => (
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
