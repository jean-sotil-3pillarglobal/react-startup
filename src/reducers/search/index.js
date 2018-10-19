export const itemSelectedReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
  case 'ITEM_SELECTED':
    return action.payload;
  default:
    return '';
  }
};

export const anotherReducer = (state = null, action) => state;

