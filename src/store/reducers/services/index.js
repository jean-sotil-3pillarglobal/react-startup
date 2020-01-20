import {
  SET_CATEGORY,
  SET_SERVICE,
  SET_SERVICES,
} from '../../actions/services';

export const getCategoryReducer = (state = null, action) => {
  switch (action.type) {
  case SET_CATEGORY:
    return action.payload;
  default:
    return state;
  }
};

export const getServicesReducer = (state = null, action) => {
  switch (action.type) {
  case SET_SERVICES:
    return action.payload;
  default:
    return state;
  }
};

export const getServiceReducer = (state = null, action) => {
  switch (action.type) {
  case SET_SERVICE:
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;
