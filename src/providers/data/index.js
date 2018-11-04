import ConstantsProvider from '../constants/index';

function get (url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(data => cb(data));
}

function makeUrl (path) {
  return `${ConstantsProvider.services.endpoint}${path}`;
}

function getUsers (cb) {
  return get(makeUrl(ConstantsProvider.services.users), data => cb(data));
}

const DataProvider = {
  get: get,
  getUsers: getUsers,
};

export default DataProvider;
