import { Component } from 'react';

// components
import ItemList from './item-list';
import ItemDetail from './item-detail';

// providers
import DataProvider from '../../providers/data';

// styles
import styles from './index.scss';

class SearchPage extends Component {
  componentDidMount () {
    DataProvider.getUsers((data) => {
      if (data) {
        this.setState({ users: data });
      }
    });
  }

  constructor (props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render () {
    return (
      <div className="">
        <div className="row">
          <div className="col-md-9">
            <ItemList />
          </div>
          <div className="col-md-3">
            <ItemDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
