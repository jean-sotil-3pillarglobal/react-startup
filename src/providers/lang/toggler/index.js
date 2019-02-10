import { bindActionCreators } from 'redux';
import { Component } from 'react';
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
      // for testing...
      switch (this.props.id) {
      case 'dummy.title':
        copy = 'title';
        break;
      case 'dummy.subtitle':
        copy = 'subtitle subtitle';
        break;
      case 'dummy.caption':
        copy = 'caption caption caption';
        break;
      case 'dummy.button':
        copy = 'button';
        break;
      default:
        copy = 'dummy';
      }
    }

    return copy;
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
