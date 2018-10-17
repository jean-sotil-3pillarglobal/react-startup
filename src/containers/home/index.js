import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// actions
import usernameChangeAction from '../../actions/home/index';

// styles
import styles from './index.scss';

class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
    };

    // proxies - proxy[el][e]
    this.proxyInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <input
          value={this.state.username}
          onChange={this.proxyInputChange}
        />
        {this.state.username}
      </div>
    );
  }

  handleInputChange (evt) {
    this.setState({ username: evt.target.value });
  }
}

// state has props of component
function mapStateToProps (state) {
  return {
    username: state.username,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ username: usernameChangeAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
