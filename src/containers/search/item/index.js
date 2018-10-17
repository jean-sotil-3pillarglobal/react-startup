import { Component } from 'react';

class Item extends Component {
  render() {
    const {
      name,
    } = this.props.user;

    return (
      <li className="list-group-item">
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
}

export default Item;
