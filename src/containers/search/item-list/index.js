import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// components
import Item from '../item';

class ItemList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  render () {
    const itemList = this.props.items.map((item) => {
      return (
        <Item key={item.id} item={item} />
      );
    });

    return (
      <div className="search-list-group">
        <h2>{!this.props.selectedItem.name ? 'Select an item.' : this.props.selectedItem.name}</h2>
        <ul className="list-group">
          {itemList}
        </ul>
      </div>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
  };
}

export default connect(mapStateToProps)(ItemList);

