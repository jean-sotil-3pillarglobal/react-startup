export const selectedItemReducer = (state = null, action) => {
  switch (action.type) {
  case 'ITEM_SELECTED':
    return action.payload;
  default:
    return '';
  }
};

export const anotherReducer = (state = null, action) => state;

