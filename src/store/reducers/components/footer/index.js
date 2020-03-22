import {
  LANGUAGE_SELECTED,
  VARIANT_VERBIAGE_SELECTED,
} from '../../../actions/components/footer';

import config from '../../../../providers/config';

import VerbiageOfAuto from '../../../../providers/lang/verbs/aquaclinica/auto';
import VerbiageOfDefault from '../../../../providers/lang/verbs/aquaclinica/default';
import VerbiageOfDental from '../../../../providers/lang/verbs/aquaclinica/dental';
import VerbiageOfGroup from '../../../../providers/lang/verbs/aquaclinica/group';

export const selectedLanguageReducer = (state = config.defaultLang, action) => {
  switch (action.type) {
  case LANGUAGE_SELECTED:
    window.localStorage.setItem('language', action.payload);
    return action.payload;
  default:
    return window.localStorage.getItem('language') || state;
  }
};

export const selectedVariantVerbiageReducer = (state = VerbiageOfDefault, action) => {
  if (action.type === VARIANT_VERBIAGE_SELECTED) {
    let value;
    switch (action.payload) {
    case 'auto':
      value = VerbiageOfAuto;
      break;
    case 'dental':
      value = VerbiageOfDental;
      break;
    case 'group':
      value = VerbiageOfGroup;
      break;
    default:
      value = VerbiageOfDefault;
    }
    return value;
  }

  return state;
};

// default
export const defaultReducer = null;
