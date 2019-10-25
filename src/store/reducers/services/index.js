import {
  SET_SERVICE,
} from '../../actions/services';

export const getServiceReducer = (state = {}, action) => {
  switch (action.type) {
  case SET_SERVICE:
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;
