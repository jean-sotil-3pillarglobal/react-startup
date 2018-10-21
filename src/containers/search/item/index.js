import { Component } from 'react';

class Item extends Component {
  constructor (props) {
    super(props);

    this.proxySelectItem = this.handlerSelectItem.bind(this);
  }

  render () {
    const {
      name,
    } = this.props.item;

    return (
      <li className="list-group-item" onClick={this.proxySelectItem}>
        <div className="row">
          <div className="col-md-3">
            <img className="img-fluid img-thumbnail" src="https://via.placeholder.com/350x150" alt={name}/>
          </div>
          <div className="col-md-9">
            <p>{name}</p>
          </div>
        </div>
      </li>
    );
  }

  handlerSelectItem () {
    this.props.onSelectedItem(this.props.item);
  }
}

export default Item;
