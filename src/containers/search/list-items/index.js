import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// components
import Item from '../item/index';

// actions
import { selectedItemAction } from '../../../store/actions/search/index';

// selectors
import { selectedItemSelector } from '../../../store/selectors/search/index';

class ListItems extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedItem: null,
    };

    this.callbackSelectItem = this.handleSelectItem.bind(this);
  }

  render() {
    const userItems = this.props.users.map((user) => {
      return (
        <Item onSelectedItem={this.callbackSelectItem} key={user.id} user={user} />
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

// state has props of component
function mapStateToProps (state) {
  return {
    selectedItem: selectedItemSelector,
  };
}

const mapDispatchToProps = {
  handleSelectItem: selectedItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);

