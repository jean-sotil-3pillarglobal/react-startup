import axios from 'axios';

import { SET_LEAD_TYPE } from '../global';

export const FETCH_LEAD = 'FETCH_LEAD';

const setLead = (data: Object) => {
  return {
    payload: data,
    type: FETCH_LEAD,
  };
};

const setLeadType = (data: Object) => {
  return {
    payload: data,
    type: SET_LEAD_TYPE,
  };
};

export const fetchLeadAction = (uuid: string) => {
  const url = `http://localhost:3000/hub/${uuid}`;

  return (dispatch: Function) => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;

        dispatch(setLead(data));
        dispatch(setLeadType(data));
      })
      .catch((error) => {
        let message = error.response
          ? error.response.data.message
          : error.message;
        message = message || 'Oops something went wrong';
        console.log(message);
      });
  };
};
