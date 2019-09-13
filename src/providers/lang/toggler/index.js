import HTMLParser from 'html-react-parser';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// action creators
import {
  selectLanguageAction,
  selectVariantVerbiageAction,
} from '../../../store/actions/components/footer';

class LangToggler extends Component {
  state = {}

  chooseVerbiage (leadType) {
    const { selectVariantVerbiage } = this.props;
    selectVariantVerbiage(leadType);
  }

  props: {
    id: string,
    language: string,
    leadType: string,
    selectLanguage: Function,
    selectVariantVerbiage: Function,
    verbiage: Function,
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
