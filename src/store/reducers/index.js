import { combineReducers } from 'redux';

// global
import {
  getDeviceReducer,
  getLeadTypeReducer,
} from './global';

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
  language: selectedLanguageReducer,
  lead: getLeadReducer,
  leadType: getLeadTypeReducer,
  verbiage: selectedVariantVerbiageReducer,
});

export default rootReducer;
