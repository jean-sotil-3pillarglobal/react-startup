export const selectedItemAction = (item) => {
  return {
    type: 'ITEM_SELECTED',
    payload: item,
  };
};

export const anotherItemSelectedAction = (item) => {
  return {
    type: 'ANOTHER_ITEM_SELECTED',
    payload: item,
  };
};
