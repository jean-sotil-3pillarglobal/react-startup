const selectLanguageAction = (evt) => {
  return {
    type: 'LANGUAGE_SELECTED',
    payload: evt.target.value,
  };
};

export default selectLanguageAction;
