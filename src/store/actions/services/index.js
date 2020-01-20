export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SERVICE = 'SET_SERVICE';
export const SET_SERVICES = 'SET_SERVICES';

export const setServiceCategoryAction = (category) => {
  return {
    payload: category,
    type: SET_CATEGORY,
  };
};

export const setServicesAction = (services) => {
  return {
    payload: services,
    type: SET_SERVICES,
  };
};

export const setServiceAction = (service) => {
  return {
    payload: service,
    type: SET_SERVICE,
  };
};
