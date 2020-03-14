import moment from 'moment';

import Messages from '../messages';

export default function (rule, language) {
  const msg = Messages[rule.type][language];

  const validate = {
    date: ({ target }) => {
      const date = moment(target.value);
      return date.isValid() || msg;
    },
    email: (value) => {
      const reg = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      return (value && reg.test(value)) || msg;
    },
    empty: (value) => {
      return (value && Array.isArray(value) && value.length > 0) || msg;
    },
    max: value => (value && value.length <= rule.value) || msg.replace('$value', rule.value),
    min: value => (value && value.length >= rule.value) || msg.replace('$value', rule.value),
    phone: (value) => {
      const phone = (value && (value.replace && value.replace(/\D+/g, ''))) || '';
      return phone.length > 10 || msg;
    },
    required: (value) => {
      return (value && value.length > 0) || msg;
    },
  };

  return validate[rule.type];
}
