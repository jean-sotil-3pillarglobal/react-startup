import { combineReducers } from 'redux';

/*
// global
*/
import {
  getDeviceReducer,
} from './global';

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
  getDevice: getDeviceReducer,
  selectedLanguage: selectedLanguageReducer,
  selectedVariantVerbiage: selectedVariantVerbiageReducer,
});

export default rootReducer;
