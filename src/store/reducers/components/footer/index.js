import {
  LANGUAGE_SELECTED,
  VARIANT_VERBIAGE_SELECTED,
} from '../../../actions/components/footer';

export const selectedLanguageReducer = (state = '', action) => {
  switch (action.type) {
  case LANGUAGE_SELECTED:
    return action.payload;
  default:
    return state;
  }
};

export const selectedVariantVerbiageReducer = (state = null, action) => {
  switch (action.type) {
  case VARIANT_VERBIAGE_SELECTED:
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;

