import { combineReducers } from 'redux';

// home reducers
import { usernameChangeReducer } from './home/index';

// root combined reducer
const rootReducer = combineReducers({
  // home: reducers block
  usernameChangeReducer,
});

export default rootReducer;
