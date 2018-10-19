import { combineReducers } from 'redux';

// home reducers
import { itemSelectedReducer } from './search/index';
import { usernameChangeReducer } from './home/index';

// root combined reducer
const rootReducer = combineReducers({
  // home: reducers block
  usernameChangeReducer,
  itemSelectedReducer,
});

export default rootReducer;
