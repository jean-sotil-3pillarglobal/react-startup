export const LANGUAGE_SELECTED = 'LANGUAGE_SELECTED';
export const VARIANT_VERBIAGE_SELECTED = 'VARIANT_VERBIAGE_SELECTED';

export const selectLanguageAction = (value) => {
  return {
    payload: value,
    type: LANGUAGE_SELECTED,
  };
};

export const selectVariantVerbiageAction = (verbiage) => {
  return {
    payload: verbiage,
    type: VARIANT_VERBIAGE_SELECTED,
  };
};
