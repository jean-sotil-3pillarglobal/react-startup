import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';

import Async from '../async-component';
import Footer from '../../components/footer';
import Header from '../../components/header';

// components
const PreLoader = Async(() => import('../../components/commons/preloader').then(module => module.default), {});

class Home extends Component {
  render () {
    return (
      <div className="container">
        <PreLoader />
        <Header />
        Hello!
        <Footer />
      </div>
    );
  }
}

// state has props of component
function mapStateToProps ({ weather }) {
  return {
  };
}

export default connect(mapStateToProps, null)(Home);
