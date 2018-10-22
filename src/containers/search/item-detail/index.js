import { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetail extends Component {
  render () {
    return (
      <div className="item-detail">
        <p>Detail for: {this.props.item.name}</p>
      </div>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    item: state.selectedItem,
  };
}

export default connect(mapStateToProps)(ItemDetail);
