import { Component } from 'react';
import classnames from 'classnames';

class Icon extends Component {
  render() {
    const { name } = this.props;

    return (
      <i className={classnames(`uil uil-${name}`, this.props.className)}></i>
    );
  }
}

export default Icon;
