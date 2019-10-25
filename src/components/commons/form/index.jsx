
import React, { Component, Fragment } from 'react';

import {
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';

// components
import { LangInput } from './../../../components/commons/input';

const styles = theme => ({
  button: {
    margin: 0,
  },
  card: {
    backgroundColor: theme.palette.background.transparent,
    overflow: 'visible',
  },
  helper: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  item: {
    width: '100%',
  },
  root: {
    marginTop: theme.spacing(2),
  },
  row: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  title: {
    fontWeight: 600,
    margin: `${theme.spacing(2)}px 0`,
  },
});

class FormBlock extends Component {
  state = {}

  props: {
    children: Object,
    classes: Object,
    copy: Object,
    disabled: Boolean,
    document: Object,
    errors: Object,
    proxy: Object,
  }

  render () {
    const {
      children,
      classes,
      copy,
      document,
      proxy,
    } = this.props;

    const {
      disabled,
      errors,
      verbiage,
    } = proxy;

    return (
      <Fragment>
        {verbiage &&
          <Card className={classes.card} elevation={0}>
            {copy.label &&
              <Fragment>
                <Typography variant="h3" align="left" className={classes.title}>
                  <LangToggler id={copy.label} />
                </Typography>
                <Typography variant="caption" className={classes.helper}>
                  <LangToggler id={copy.label_helper} />
                </Typography>
              </Fragment>
            }

            <CardContent className={classes.root}>
              <Grid container spacing={8} className={classes.row}>
                {copy.fields.map((field) => {
                  const fieldType = field.input_type;
                  const sm = field.size_sm;
                  const md = field.size_md;
                  const lg = field.size_lg;
                  const {
                    key,
                    label,
                    mask,
                    options,
                    placeholder,
                    required,
                    type,
                  } = field;

                  return (
                    <Grid key={`form_${key}`} item sm={sm} md={md} lg={lg} className={classes.item}>
                      <LangInput
                        id={key}
                        key={key}
                        lang={label}
                        placeholder={placeholder}
                        name={key}
                        type={type}
                        fieldType={fieldType}
                        disabled={disabled}
                        options={options || []}
                        value={document[key] || ''}
                        error={errors[key] && errors[key].check}
                        required={required}
                        proxy={proxy}
                        mask={mask || ''} />
                    </Grid>
                  );
                })}
                {children}
              </Grid>
            </CardContent>
          </Card>
        }
      </Fragment>
    );
  }
}

export default withStyles(styles)(FormBlock);
