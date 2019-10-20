import {
  SET_HEADER_VISIBILITY,
} from '../../../actions/components/header';

export const isHeaderVisibleReducer = (state = true, action) => {
  switch (action.type) {
  case SET_HEADER_VISIBILITY:
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;
