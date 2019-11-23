export const SERVICES_INFORMATION_1_1 = [
  {
    input_type: 'input',
    key: 'first_name',
    label: {
      en: 'first name',
      es: 'primer nombre',
    },
    placeholder: {
      en: 'jean paul',
      es: 'juan pablo',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'email',
    label: {
      en: 'email',
      es: 'correo eléctronico',
    },
    placeholder: {
      en: 'jean.sotil@gmail.com',
      es: 'juan@gmail.com',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'email',
  },
  {
    input_type: 'phone',
    key: 'phone',
    label: {
      en: 'phone',
      es: 'télefono',
    },
    mask: 'phone',
    placeholder: {
      en: '(777) 889-9088',
      es: '(777) 889-9088',
    },
    required: false,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'divider',
    key: 'divider_1',
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
  },
];

export const SERVICES_INFORMATION_1_2 = [
  {
    input_type: 'multiselect',
    key: 'services',
    label: {
      en: 'available services',
      es: 'servicios disponibles',
    },
    options: [],
    placeholder: {
      en: 'choose service',
      es: 'seleccionar servicio',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'textarea',
    key: 'message',
    label: {
      en: 'Message',
      es: 'Mensaje',
    },
    placeholder: {
      en: 'Hi, I would like to know...',
      es: 'Hola, me gustaría saber más...',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'divider',
    key: 'divider_2',
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
  },
  {
    input_type: 'checkbox',
    key: 'general_disclaimer',
    label: {
      en: 'disclaimer here.',
      es: 'estoy deacuerdo, aqui.',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'email',
  },
];
