export const LANGUAGE_SELECTED = 'LANGUAGE_SELECTED';

export const VARIANT_VERBIAGE_SELECTED = 'VARIANT_VERBIAGE_SELECTED';

export const selectLanguageAction = (evt) => {
  return {
    payload: evt.target ? evt.target.value : evt,
    type: LANGUAGE_SELECTED,
  };
};

export const selectVariantVerbiageAction = (verbiage) => {
  return {
    payload: verbiage,
    type: VARIANT_VERBIAGE_SELECTED,
  };
};
