import {
  FETCH_WEATHER,
} from '../../../actions/components/header';

export const weatherReducer = (state = [], action) => {
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]); // avoid state mutations!
    return [...state, action.payload.data]; // ES6 concat
  default:
    return state;
  }
};

// default
export const defaultReducer = null;
