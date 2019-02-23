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
import VariantHealth from '../variants/themajorhub/health';

class LangToggler extends Component {
  constructor (props) {
    super(props);
    this.state = {
      language: null,
    };
  }

  render() {
    // default language
    let copy = '';
    const defaultLang = 'es';
    const { selectLanguage, selectVariantVerbiage, language, verbiage, id } = this.props;

    if (language === '') {
      selectLanguage(defaultLang);
      // TODO: dynamic injection
      selectVariantVerbiage(VariantHealth);
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
    language: state.selectedLanguage,
    verbiage: state.selectedVariantVerbiage,
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
