export const SET_DEVICE = 'SET_DEVICE';

export const setDeviceAction = (string) => {
  return {
    payload: string,
    type: SET_DEVICE,
  };
};
