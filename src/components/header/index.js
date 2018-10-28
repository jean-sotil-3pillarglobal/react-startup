import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// fetchWeatherAction
import { fetchWeatherAction } from '../../store/actions/components/header';

class Header extends Component {
  constructor (props) {
    super(props);

    // state model
    this.state = {
      term: '',
    };

    // todo: add debounce
    // proxies - on[el][e]
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <header>
        <form
          className="input-group"
          onSubmit={this.onFormSubmit}>
          <input
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value = { this.state.term }
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-link" >Submit</button>
          </span>
        </form>
      </header>
    );
  }

  onInputChange (evt) {
    this.setState({ term: evt.target.value });
  }

  onFormSubmit (evt) {
    evt.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeatherAction,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
