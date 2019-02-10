import { combineReducers } from 'redux';

/*
// components
*/

// footer
import {
  selectedLanguageReducer,
  selectedVariantVerbiageReducer,
} from './components/footer';

/*
// containers
*/

/*
// combining reducers on rootReducer
*/
const rootReducer = combineReducers({
  selectedLanguage: selectedLanguageReducer,
  selectedVariantVerbiage: selectedVariantVerbiageReducer,
});

export default rootReducer;
