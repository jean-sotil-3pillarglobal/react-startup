const selectLanguageAction = (evt) => {
  return {
    payload: evt.target.value,
    type: 'LANGUAGE_SELECTED',
  };
};

export default selectLanguageAction;
