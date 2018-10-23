import { Component } from 'react';
import { connect } from 'react-redux';

// commons
import P from '../../../components/commons/content/p';

class ItemDetail extends Component {
  render () {
    return (
      <div className="item-detail">
        <P id="containers.search.item-detail.header.title">: {this.props.item.name}</P>
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
