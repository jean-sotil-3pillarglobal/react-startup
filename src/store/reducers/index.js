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

/*
// combining reducers
*/
const rootReducer = combineReducers({
  device: getDeviceReducer,
  isHeaderVisible: isHeaderVisibleReducer,
  language: selectedLanguageReducer,
  lead: getLeadReducer,
  leadType: getLeadTypeReducer,
  verbiage: selectedVariantVerbiageReducer,
});

export default rootReducer;
