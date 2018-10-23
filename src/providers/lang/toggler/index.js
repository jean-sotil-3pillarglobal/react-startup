import { Component } from 'react';
import { connect } from 'react-redux';

// languages
import LangES from '../es';
import LangEN from '../en';

class LangToggler extends Component {
  constructor (props) {
    super(props);
    this.state = {
      language: null,
    };
  }
  render() {
    // default language
    let language = 'es';
    console.log(this.props.selectedLanguage);
    if (this.props.selectedLanguage) {
      language = this.props.selectedLanguage;
    }

    switch (language) {
    case 'en':
      this.state.language = LangEN;
      break;
    default:
      this.state.language = LangES;
    }

    return this.state.language[this.props.id];
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    selectedLanguage: state.selectedLanguage,
  };
}

export default connect(mapStateToProps)(LangToggler);
