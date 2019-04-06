import HTMLParser from 'html-react-parser';
import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// action creators
import {
  selectLanguageAction,
  selectVariantVerbiageAction,
} from '../../../store/actions/components/footer';

// TODO: dynamic injection
import VerbiageOfAuto from '../verbs/themajorhub/auto';
import VerbiageOfHealth from '../verbs/themajorhub/health';

class LangToggler extends Component {
  constructor (props) {
    super(props);
    this.state = {
      language: null,
    };
  }

  chooseVerbiage (leadType) {
    let value;
    const { selectVariantVerbiage } = this.props;

    switch (leadType) {
    case 'auto':
      value = VerbiageOfAuto;
      break;
    default:
      value = VerbiageOfHealth;
    }

    selectVariantVerbiage(value);
  }

  render() {
    // default language
    let copy = '';
    const defaultLang = 'es';
    const { selectLanguage, language, verbiage, id, leadType } = this.props;

    // select verbiage
    if (leadType && !verbiage) {
      this.chooseVerbiage(leadType);
    }

    if (language === '') {
      selectLanguage(defaultLang);
    }

    if (verbiage && verbiage(id)) {
      copy = verbiage(id)[language];
    } else {
      copy = 'dummy';
    }

    // will scape All HTML if presented.
    return HTMLParser(copy);
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    language: state.language,
    lead: state.lead,
    leadType: state.leadType,
    verbiage: state.verbiage,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectLanguage: selectLanguageAction,
    selectVariantVerbiage: selectVariantVerbiageAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LangToggler);
