function getUsernameAction (evt) {
  return {
    type: 'GET_USERNAME',
    payload: evt.target.value,
  };
}

export default getUsernameAction;

