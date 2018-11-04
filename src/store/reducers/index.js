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
  items: itemsReducer,
  selectedItem: selectedItemReducer,
  selectedLanguage: selectedLanguageReducer,
  weather: weatherReducer,
});

export default rootReducer;
