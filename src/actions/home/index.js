const usernameChangeAction = (username) => {
  return {
    type: 'USERNAME_ACTION',
    payload: username,
  };
};

export default usernameChangeAction;
