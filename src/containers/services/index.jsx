import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import {
  withStyles,
} from '@material-ui/core';

import {
  selectVariantVerbiageAction,
} from './../../store/actions/components/footer';

import {
  setServiceAction,
} from './../../store/actions/services';

import Helmet from '../../components/commons/helmet';
import Footer from '../../components/footer';
import SectionA from './section-1';

// commons
import ContactFormLayout from '../../components/layouts/commons/contact_1';
import ServicesLayout from '../../components/layouts/commons/services_1';

// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

import {
  FindServiceByPath,
} from './../../providers/utils/filter.services';

const styles = () => ({
  container: {
    margin: 0,
  },
});

const NODE = 'headers';
const SLOT = 'services';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'description',
  'keywords',
  'services',
  'title',
]);

const init = {
  document: {},
  service: {},
};

class Services extends Component {
  constructor(props) {
    super(props);

    // init
    this.state = init;
  }

  static getDerivedStateFromProps = (nextProps) => {
    const {
      language,
      match: {
        url,
      },
      selectVariantVerbiage,
      service,
      setService,
      verbiage,
    } = nextProps;

    if (!verbiage) {
      selectVariantVerbiage('default');
    }

    if (verbiage && !service.id) {
      setService(FindServiceByPath(url, verbiage(copy.services), language));
    }

    if (service.id) {
      return {
        service,
      };
    }

    return init;
  }

  componentWillUnmount = () => {
    this.reset();
  }

  reset = () => {
    const {
      setService,
    } = this.props;

    setService({});
    this.setState(init);
  }

  props: {
    device: string,
    language: string,
    setService: Function,
    verbiage: Function,
  }

  handleChange = (event) => {
    const { document } = this.state;
    const { target } = event;
    const { name, value } = target;

    document[name] = value;

    this.setState({
      ...this.state,
      document,
    });
  }

  handleSetService = (item, cb) => {
    const {
      setService,
    } = this.props;

    setService(item);
    cb(true);
  }

  render () {
    const {
      device,
      language,
      verbiage,
    } = this.props;

    const {
      document,
      service,
    } = this.state;

    const proxy = {
      device,
      language,
      verbiage,
    };

    return (
      <Fragment>
        {service.id &&
        <Fragment>
          <Helmet proxy={proxy} copy={copy} />
          <SectionA service={service} document={document} proxy={proxy} >
            <ContactFormLayout
              document={document}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              proxy={proxy}
              service={service}
              variant="primary"
            />
          </SectionA>
          <ServicesLayout setService={this.handleSetService} proxy={proxy} variant="light2" />
          <Footer />
        </Fragment>
        }
      </Fragment>
    );
  }
}

function mapStateToProps (state) {
  return {
    device: state.device,
    language: state.language,
    service: state.service,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectVariantVerbiage: selectVariantVerbiageAction,
    setService: setServiceAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Services)));
