export const usernameChangeReducer = (state = null, action) => {
  switch (action.type) {
  case 'USERNAME_ACTION':
    return action.payload;
  default:
    return '';
  }
};

export const anotherReducer = (state = null, action) => state;

