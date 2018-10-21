export const itemsAction = (items) => {
  return {
    type: 'ITEMS_BIND',
  };
};

export const selectedItemAction = (item) => {
  return {
    type: 'ITEM_SELECTED',
    payload: item,
  };
};

