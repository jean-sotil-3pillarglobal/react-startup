
export default function (required, value, fieldType) {
  let check = false;
  let error = false;

  const checkPhone = () => {
    return value.length !== 10;
  };

  if (required) {
    switch (fieldType) {
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

  if (fieldType === 'phone' && value.length > 0) {
    check = checkPhone();
    error = check ? 'phone' : false;
  }

  return {
    check,
    error,
  };
}
