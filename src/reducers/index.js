import { combineReducers } from 'redux';

// home reducers
import HomeReducers from './home/index';

// root combined reducer
const rootReducer = combineReducers({
  // home: reducers block
  username: HomeReducers.username,
});

export default rootReducer;
