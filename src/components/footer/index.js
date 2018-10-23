import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// action creators
import selectLanguageAction from '../../store/actions/components/footer';

class Footer extends Component {
  render () {
    let defaultLanguage = 'es';

    if (this.props.selectedLanguage) {
      defaultLanguage = this.props.selectedLanguage;
    }

    return (
      <footer className="list-group-item">
        <select
          onChange={evt => this.props.selectLanguage(evt) }
          value={defaultLanguage}>
          <option value="es">es</option>
          <option value="en">en</option>
        </select>
      </footer>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    selectedLanguage: state.selectedLanguage,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectLanguage: selectLanguageAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
