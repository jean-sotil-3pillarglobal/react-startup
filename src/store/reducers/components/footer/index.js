import {
  LANGUAGE_SELECTED,
  VARIANT_VERBIAGE_SELECTED,
} from '../../../actions/components/footer';

import VerbiageOfAuto from '../../../../providers/lang/verbs/aquaclinica/auto';
import VerbiageOfDefault from '../../../../providers/lang/verbs/aquaclinica/default';
import VerbiageOfDental from '../../../../providers/lang/verbs/aquaclinica/dental';
import VerbiageOfGroup from '../../../../providers/lang/verbs/aquaclinica/group';
import VerbiageOfHealth from '../../../../providers/lang/verbs/aquaclinica/health';

export const selectedLanguageReducer = (state = 'es', action) => {
  switch (action.type) {
  case LANGUAGE_SELECTED:
    return action.payload;
  default:
    return state;
  }
};

export const selectedVariantVerbiageReducer = (state = false, action) => {
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
    case 'health':
      value = VerbiageOfHealth;
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
