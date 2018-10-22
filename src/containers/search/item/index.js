import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

// action creators
import {
  itemsAction,
  selectItemAction,
} from '../../../store/actions/search';

class Item extends Component {
  render () {
    const {
      name,
    } = this.props.item;

    return (
      <li onClick={() => this.props.selectItem(this.props.item) } className="list-group-item">
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

// map state to props
function mapStateToProps (state) {
  return {
    items: state.items,
  };
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectItem: selectItemAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
