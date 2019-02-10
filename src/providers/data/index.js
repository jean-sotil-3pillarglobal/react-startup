import axios from 'axios';

import ConstantsProvider from '../constants/index';

function makeRequest (url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function makeMultipleRequest (promises) {
  return new Promise((resolve, reject) => 
    axios.all(promises).then((results) => {
      resolve(results);
    })
    .catch((error) => {
      reject(error);
    });
  });
}

const DataProvider = {
  makeRequest,
  makeMultipleRequest,
};

export default DataProvider;
