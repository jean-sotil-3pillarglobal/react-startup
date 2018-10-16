import { Component } from 'react';

class Header extends Component {
  constructor (props) {
    super(props);

    // state model
    this.state = {
      term: '',
    };

    // proxy handle[el][e]
    this.handleInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <header>
        <input
          value = { this.state.value }
          onChange={this.handleInputChange} />
        Value of the input: {this.state.term}
      </header>
    );
  }

  // naming: on[el][e]
  onInputChange (e) {
    this.setState({ term: e.target.value });
  }
}

export default Header;
