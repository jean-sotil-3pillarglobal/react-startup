import { combineReducers } from 'redux';

// search reducers
import {
  itemsReducer,
  selectedItemReducer,
} from './search';

// root combined reducer
const rootReducer = combineReducers({
  // home
  // search
  items: itemsReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;
