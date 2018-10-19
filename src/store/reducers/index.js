import { combineReducers } from 'redux';

// home reducers
import { selectedItemReducer } from './search/index';
import { usernameChangeReducer } from './home/index';

// root combined reducer
const rootReducer = combineReducers({
  // home: reducers block
  usernameChangeReducer,
  selectedItemReducer,
});

export default rootReducer;
