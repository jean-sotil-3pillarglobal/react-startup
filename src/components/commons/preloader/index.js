import React from 'react';
import $ from 'jquery';

import './index.scss';

class PreLoader extends React.Component {
  componentDidMount() {
    $('#preloader').delay(500).fadeOut('fast');
  }

  render() {
    return (
      <div id="preloader">
        <div className="container">
          <div className="col-md-12">
            <div className="sbook">
              <h2>CODE<span className="color">loading</span></h2>
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreLoader;
