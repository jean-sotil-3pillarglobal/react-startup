import _ from 'lodash';
import { Component } from 'react';

class Header extends Component {
  constructor (props) {
    super(props);

    // state model
    this.state = {
      term: '',
    };
  }

  render() {
    // todo: add debounce
    // proxies - proxy[el][e]
    const proxyInputChange = this.handleInputChange.bind(this);

    return (
      <header>
        <input
          value = { this.state.value }
          onChange={proxyInputChange} />
        Value of the input: {this.state.term}
      </header>
    );
  }

  // naming: handle[el][e]
  handleInputChange (evt) {
    this.setState({ term: evt.target.value });
  }
}

export default Header;
