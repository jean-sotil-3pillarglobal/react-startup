
const Messages = (type, language) => {
  const messages = {
    optional: {
      en: ' — optional',
      es: ' — opcional',
    },
    required: {
      en: 'required field',
      es: 'campo requerido.',
    },
  };

  return messages[type][language] || '';
};

export default Messages;
