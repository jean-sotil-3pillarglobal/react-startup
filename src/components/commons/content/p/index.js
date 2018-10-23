import { Component } from 'react';
import LangToggler from '../../../../providers/lang/toggler';

class P extends Component {
  render() {
    return (
      <p>
        <LangToggler id={this.props.id}></LangToggler>
        {this.props.children}
      </p>
    );
  }
}

export default P;
