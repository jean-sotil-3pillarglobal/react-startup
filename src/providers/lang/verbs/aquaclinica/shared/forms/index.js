import {
  SERVICES_INFORMATION_1_1,
  SERVICES_INFORMATION_1_2,
} from './../../../../forms/services';

import {
  constants,
  assets,
} from './../../../../../config';

// assets
const {
  icons,
} = assets;

// constants
const {
  GENERAL,
} = constants;

export default [
  // SERVICE 1
  {
    cta: {
      en: 'next >',
      es: 'siguiente >',
    },
    icon: icons.general,
    label: {
      en: 'your quote',
      es: 'tú consulta',
    },
    rows: [
      {
        fields: SERVICES_INFORMATION_1_2,
        label: {
          en: 'Free quote in minutes',
          es: 'Consulta gratuita en minutos',
        },
        label_helper: {
          en: 'Let&#39; us know which service you feel instered and we will contact you inmediatly with more information.',
          es: 'Dejanos saber el servicio de tu interés y te contactaremos inmediatamente con más información.',
        },
      },
    ],
    tip: {
      en: 'Free Quote in Minutes.',
      es: 'Consultas gratuitas en minutos.',
    },
    tipSub: {
      en: 'Compare best rates available.',
      es: 'Tenemos las mejores tarifas disponible.',
    },
    value: [
      GENERAL,
    ],
  },
  // SERVICE 1
  {
    cta: {
      en: 'create quote',
      es: 'crear consulta',
    },
    icon: icons.service1,
    label: {
      en: 'your information',
      es: 'tú información',
    },
    rows: [
      {
        fields: SERVICES_INFORMATION_1_1,
        label: {
          en: 'Provide your personal information',
          es: 'Provee tus datos personales',
        },
        label_helper: {
          en: 'Let&#39;s begin your quote. Take a <br/>minute to fill with your information.',
          es: 'Iniciemos tu solicitud. Ingresa ahora <br/>tu información personal.',
        },
      },
    ],
    tip: {
      en: 'Free Quote in Minutes.',
      es: 'Consultas gratuitas en minutos.',
    },
    tipSub: {
      en: 'Compare best rates available.',
      es: 'Tenemos las mejores tarifas disponible.',
    },
    value: [
      GENERAL,
    ],
  },
];
