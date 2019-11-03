import {
  SET_CATEGORY,
  SET_SERVICE,
} from '../../actions/services';

export const getCategoryReducer = (state = {}, action) => {
  switch (action.type) {
  case SET_CATEGORY:
    return action.payload;
  default:
    return state;
  }
};

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
