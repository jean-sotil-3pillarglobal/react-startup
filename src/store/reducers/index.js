import { combineReducers } from 'redux';

// components
// footer
import {
  selectedLanguageReducer,
} from './components/footer';

// search reducers
import {
  itemsReducer,
  selectedItemReducer,
} from './search';

// root combined reducer
const rootReducer = combineReducers({
  // components
  // footer
  selectedLanguage: selectedLanguageReducer,
  // home
  // search
  items: itemsReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;
