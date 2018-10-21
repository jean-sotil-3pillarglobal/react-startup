import { combineReducers } from 'redux';

// home reducers
import {
  usernameChangeReducer,
} from './home/index';

// search reducers
import {
  itemsReducer,
  selectedItemReducer,
} from './search/index';

// root combined reducer
const rootReducer = combineReducers({
  // home
  // search
  items: itemsReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;
