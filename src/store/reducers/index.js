import { combineReducers } from 'redux';

/*
// components
*/

// header
import {
  weatherReducer,
} from './components/header';

// footer
import {
  selectedLanguageReducer,
} from './components/footer';

/*
// containers
*/

// search
import {
  itemsReducer,
  selectedItemReducer,
} from './search';

/*
// combining reducers on rootReducer
*/
const rootReducer = combineReducers({
  // components
  weather: weatherReducer,
  selectedLanguage: selectedLanguageReducer,
  // containers
  items: itemsReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;
