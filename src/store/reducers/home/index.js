import {
  FETCH_LEAD,
} from '../../actions/home';

export const getLeadReducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_LEAD:
    return action.payload;
  default:
    return state;
  }
};
