function usernameChangeAction (evt) {
  return {
    type: 'USERNAME_ACTION',
    payload: evt.target.value,
  };
}

export default usernameChangeAction;

