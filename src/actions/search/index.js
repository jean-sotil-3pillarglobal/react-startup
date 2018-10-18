const userSelectedAction = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user,
  };
};

export default userSelectedAction;
