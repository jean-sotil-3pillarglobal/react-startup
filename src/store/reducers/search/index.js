export const itemsReducer = (state, action) => {
  return [
  ];
};


export const selectedItemReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ITEM_SELECTED':
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;

