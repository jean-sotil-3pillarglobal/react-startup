import { combineReducers } from 'redux';

// global
import {
  getDeviceReducer,
  getLeadTypeReducer,
} from './global';

// header
import {
  isHeaderVisibleReducer,
} from './components/header';

// footer
import {
  selectedLanguageReducer,
  selectedVariantVerbiageReducer,
} from './components/footer';

//
// containers
//

// home
import {
  getLeadReducer,
} from './home';

// services
import {
  getCategoryReducer,
  getServiceReducer,
} from './services';

/*
// combining reducers
*/
const rootReducer = combineReducers({
  category: getCategoryReducer,
  device: getDeviceReducer,
  isHeaderVisible: isHeaderVisibleReducer,
  language: selectedLanguageReducer,
  lead: getLeadReducer,
  leadType: getLeadTypeReducer,
  service: getServiceReducer,
  verbiage: selectedVariantVerbiageReducer,
});

export default rootReducer;
