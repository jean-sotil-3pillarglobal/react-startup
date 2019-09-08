
export const Validate = (event, value, type) => {
  let check = false;
  let error = false;

  if (event.target.required) {
    switch (type) {
    case 'input':
      // required and empty
      check = value.length <= 0;
      error = 'required';

      break;
    default:
      check = false;
      error = false;
    }
  }

  return {
    check,
    error,
  };
};
