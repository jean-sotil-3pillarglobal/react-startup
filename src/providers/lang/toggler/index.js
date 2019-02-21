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

    if (this.props.selectedLanguage === '') {
      this.props.selectLanguage(defaultLang);
    }

    // TODO: dynamic injection
    this.props.selectVariantVerbiage(VariantHealth);

    if (this.props.selectedVariantVerbiage && this.props.selectedVariantVerbiage(this.props.id)) {
      copy = this.props.selectedVariantVerbiage(this.props.id)[this.props.selectedLanguage];
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
    selectedLanguage: state.selectedLanguage,
    selectedVariantVerbiage: state.selectedVariantVerbiage,
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
