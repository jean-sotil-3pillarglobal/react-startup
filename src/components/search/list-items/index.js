import { Component } from 'react';

// components
import Item from '../item/index';

class ListItems extends Component {
  render() {
    const userItems = this.props.users.map((user) => {
      return (
        <Item key={user.id} user={user} />
      );
    });

    return (
      <ul className="list-group">
        {userItems}
      </ul>
    );
  }
}

export default ListItems;
