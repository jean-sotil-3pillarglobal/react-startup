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
      en: 'next: your message',
      es: 'siguiente: tú mensaje',
    },
    icon: icons.service1,
    label: {
      en: 'personal information',
      es: 'información personal',
    },
    rows: [
      {
        fields: SERVICES_INFORMATION_1_1,
        label: {
          en: 'About you',
          es: 'Datos Personales',
        },
        label_helper: {
          en: 'Let&#39;s begin your quote. Take a minute to fill with your information.',
          es: 'Iniciemos tu solicitud. Ingresa ahora tu información personal.',
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
      en: 'send your quote',
      es: 'enviar consulta',
    },
    icon: icons.general,
    label: {
      en: 'how we can help?',
      es: 'en qué podemos ayudar?',
    },
    rows: [
      {
        fields: SERVICES_INFORMATION_1_2,
        label: {
          en: 'We are here to help you!',
          es: 'Te vamos a ayudar!',
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
];
