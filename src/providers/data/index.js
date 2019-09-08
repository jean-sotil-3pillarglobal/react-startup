import axios from 'axios';
import Config from '../config/index';

const DataProvider = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${Config.rootUrl}/${url}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default DataProvider;
