export const GENERAL_INFORMATION_1_1 = [
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
    key: 'last_name',
    label: {
      en: 'last name',
      es: 'apellidos',
    },
    placeholder: {
      en: '',
      es: '',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
];

export const GENERAL_INFORMATION_1_2 = [
  {
    input_type: 'input',
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
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'birthdate',
    label: {
      en: 'date of birth',
      es: 'fecha de nacimiento',
    },
    placeholder: {
      en: '',
      es: '',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'date',
  },
];

export const GENERAL_INFORMATION_1_3 = [
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
    required: false,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'email',
  },
  {
    input_type: 'divider',
  },
];

export const GENERAL_INFORMATION_1_4 = [
  {
    input_type: 'input',
    key: 'address_1',
    label: {
      en: 'Address 1',
      es: 'Dirección 1',
    },
    placeholder: {
      en: 'Madisson Street 210',
      es: 'Madisson Street 210',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'address_2',
    label: {
      en: 'Address 2',
      es: 'Dirección 2',
    },
    placeholder: {
      en: '',
      es: '',
    },
    required: false,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
];

export const GENERAL_INFORMATION_1_5 = [
  {
    input_type: 'select',
    key: 'city',
    label: {
      en: 'country',
      es: 'país',
    },
    options: [
      {
        label: {
          en: 'state 1',
          es: 'estado 1',
        },
        value: 'state 1',
      },
      {
        label: {
          en: 'state 2',
          es: 'estado 2',
        },
        value: 'state 2',
      },
      {
        label: {
          en: 'state 2',
          es: 'estado 2',
        },
        value: 'state 3',
      },
    ],
    placeholder: {
      en: 'new york',
      es: 'nueva york',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'select',
    key: 'state',
    label: {
      en: 'state',
      es: 'estado',
    },
    options: [
      {
        label: {
          en: 'state 1',
          es: 'estado 1',
        },
        value: 'state 1',
      },
      {
        label: {
          en: 'state 2',
          es: 'estado 2',
        },
        value: 'state 2',
      },
      {
        label: {
          en: 'state 2',
          es: 'estado 2',
        },
        value: 'state 3',
      },
    ],
    placeholder: {
      en: 'new york city',
      es: 'nueva york city',
    },
    required: true,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'zipcode',
    label: {
      en: 'zip code',
      es: 'código postal',
    },
    mask: 'zipcode',
    placeholder: {
      en: '12345',
      es: '54321',
    },
    required: false,
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
];

export const GENERAL_INFORMATION_1_6 = [
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
  {
    input_type: 'divider',
  },
];
