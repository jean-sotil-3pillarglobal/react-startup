export const SET_SERVICE = 'SET_SERVICE';

export const setServiceAction = (service) => {
  return {
    payload: service,
    type: SET_SERVICE,
  };
};
