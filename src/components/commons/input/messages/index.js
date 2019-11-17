
const Messages = (type, language) => {
  const messages = {
    optional: {
      en: ' — optional',
      es: ' — opcional',
    },
    phone: {
      en: 'invalid phone.',
      es: 'telefono invalido.',
    },
    required: {
      en: 'required field.',
      es: 'campo requerido.',
    },
  };

  return messages[type][language] || '';
};

export default Messages;
