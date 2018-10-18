import { Component } from 'react';

// components
import Item from '../item/index';

class ListItems extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedItem: null,
    };
  }

  render() {
    const userItems = this.props.users.map((user) => {
      return (
        <Item onSelectedItem={this.handleSelectItem} key={user.id} user={user} />
      );
    });

    return (
      <ul className="list-group">
        {userItems}
      </ul>
    );
  }

  handleSelectItem (item) {
    console.log(item);
  }
}

export default ListItems;
