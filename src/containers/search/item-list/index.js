import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// components
import Item from '../item';

// actions
import {
  itemsAction,
  selectedItemAction,
} from '../../../store/actions/search';

class ItemList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [],
      selectedItem: null,
    };

    this.callbackSelectItem = this.handleSelectItem.bind(this);
  }

  render() {
    const userItems = this.props.items.map((item) => {
      return (
        <Item onSelectedItem={this.callbackSelectItem} key={item.id} item={item} />
      );
    });

    return (
      <div className="search-list-group">
        <h2>{(this.state.selectedItem) ? this.state.selectedItem.name : '' }</h2>
        <ul className="list-group">
          {userItems}
        </ul>
      </div>
    );
  }

  handleSelectItem (item) {
    this.setState({ selectedItem: item });
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

