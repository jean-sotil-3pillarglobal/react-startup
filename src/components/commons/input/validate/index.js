import Messages from '../messages';

export default function (rule, language) {
  const msg = Messages[rule.type][language];

  const validate = {
    email: (value) => {
      const reg = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      return (value && reg.test(value)) || msg;
    },
    empty: value => (value && Array.isArray(value) && value.length > 0) || msg,
    max: value => (value && value.length <= rule.value) || msg.replace('$value', rule.value),
    min: value => (value && value.length >= rule.value) || msg.replace('$value', rule.value),
    required: (value) => {
      return (value && value.length > 0) || msg;
    },
  };

  return validate[rule.type];
}
