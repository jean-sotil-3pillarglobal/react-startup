export const selectedLanguageReducer = (state = {}, action) => {
  switch (action.type) {
  case 'LANGUAGE_SELECTED':
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;

