import {
  SET_DEVICE,
} from '../../actions/global';

export const getDeviceReducer = (state = null, action) => {
  switch (action.type) {
  case SET_DEVICE:
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;
