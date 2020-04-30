import DataProvider from '../../../providers/data';
import { SET_LEAD_TYPE } from '../global';

export const FETCH_LEAD = 'FETCH_LEAD';

const setLead = (data) => {
  return {
    payload: data,
    type: FETCH_LEAD,
  };
};

const setLeadType = (data) => {
  return {
    payload: data,
    type: SET_LEAD_TYPE,
  };
};

export const fetchLeadAction = (uuid) => {
  const url = `hub/${uuid}`;

  const defaultValues = {
    type: 'default', // default view
  };

  return (dispatch: Function) => {
    if (uuid === '') {
      dispatch(setLead(defaultValues));
      dispatch(setLeadType(defaultValues));
    } else {
      DataProvider.get(url)
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
    }
  };
};
