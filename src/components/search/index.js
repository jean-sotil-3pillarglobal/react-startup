import { Component } from 'react';

// components
import ListItems from './list-items/index';

// providers
import DataProvider from '../../providers/data/index';

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
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <ListItems users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
