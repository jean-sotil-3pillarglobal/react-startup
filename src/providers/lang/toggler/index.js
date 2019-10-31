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
    id: any,
    language: string,
    leadType: string,
    selectLanguage: Function,
    selectVariantVerbiage: Function,
    verbiage: Function,
  }

  render() {
    // default language
    let copy = null;
    const defaultLang = 'es';
    const { selectLanguage, language, verbiage, id, leadType } = this.props;

    // select verbiage
    if (leadType && !verbiage) {
      this.chooseVerbiage(leadType);
    }

    if (language === '') {
      selectLanguage(defaultLang);
    }

    if (verbiage) {
      copy = verbiage(id);

      if (typeof id === 'string' && copy) {
        copy = copy[language] || 'dummy-verbiage';
      } else if (id[language]) {
        copy = id[language] || 'dummy-language';
      } else {
        copy = 'dummy-not-found';
      }
    } else {
      copy = 'dummy-undefined';
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
