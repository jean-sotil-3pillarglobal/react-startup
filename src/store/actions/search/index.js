export const itemsAction = (items) => {
  return {
    type: 'ITEMS_BIND',
    payload: items,
  };
};

export const selectItemAction = (item) => {
  return {
    type: 'ITEM_SELECTED',
    payload: item,
  };
};
