import {
  GENERAL_INFORMATION_1_1,
  GENERAL_INFORMATION_1_2,
  GENERAL_INFORMATION_1_3,
  GENERAL_INFORMATION_1_4,
  GENERAL_INFORMATION_1_5,
  GENERAL_INFORMATION_1_6,
} from './../../../../forms/general';

import {
  AUTO_INFORMATION_1_1,
  AUTO_INFORMATION_1_2,
  AUTO_INFORMATION_1_3,
  AUTO_INFORMATION_1_4,
} from './../../../../forms/types/auto';

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
  AUTO,
  AUTO_BENEFITS,
  AUTO_FAMILY,
  AUTO_SECURITY,
  GENERAL,
  HEALTH,
} = constants;

const QuoteForms = [
  // GENERAL
  {
    cta: {
      en: 'next: your address',
      es: 'siguiente: tu dirección',
    },
    icon: icons.general,
    label: {
      en: 'step 1 personal information',
      es: 'paso 1: información personal',
    },
    rows: [
      {
        fields: GENERAL_INFORMATION_1_1,
        label: {
          en: 'About you',
          es: 'Acerca de usted',
        },
        label_helper: {
          en: 'Let&#39;s begin your quote. Take a minute to fill with your information.',
          es: 'Iniciemos tu solicitud. Ingresa ahora tu información personal.',
        },
      },
      {
        fields: GENERAL_INFORMATION_1_2,
      },
      {
        fields: GENERAL_INFORMATION_1_3,
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
    value: GENERAL,
  },
  {
    cta: {
      en: 'start your quote now',
      es: 'iniciar tu solicitud',
    },
    icon: icons.general,
    label: {
      en: 'step 2: personal address',
      es: 'paso 2: dirección personal',
    },
    rows: [
      {
        fields: GENERAL_INFORMATION_1_4,
        label: {
          en: 'your address',
          es: 'tu dirección',
        },
        label_helper: {
          en: 'provide your personal address information below.',
          es: 'A continuación, ingresa tu dirección de residencia.',
        },
      },
      {
        fields: GENERAL_INFORMATION_1_5,
      },
      {
        fields: GENERAL_INFORMATION_1_6,
      },
    ],
    tip: {
      en: 'why choose us?',
      es: 'Porqué deberías hacerlo con nosotros?',
    },
    tipSub: {
      en: 'we only work with A-Rated companies, so you know you are being insured by a company among the best in the industry.',
      es: 'sólo trabajamos con compañias reconocidas mundialmente, en tanto, estarías asegurado con lo mejor de la industria.',
    },
    value: GENERAL,
  },

  // AUTO
  {
    cta: {
      en: 'next: auto extras',
      es: 'siguiente: auto extras',
    },
    icon: icons.auto,
    label: {
      en: 'paso 3: auto information',
      es: 'paso 3: información auto',
    },
    rows: [
      {
        fields: AUTO_INFORMATION_1_1,
        label: {
          en: 'Your Auto',
          es: 'Tú Auto',
        },
        label_helper: {
          en: 'Please take a minute to fill your information.',
          es: 'Por favor, llena tu información.',
        },
      },
    ],
    tip: {
      en: 'why choose us?',
      es: 'Porqué deberías hacerlo con nosotros?',
    },
    tipSub: {
      en: 'we only work with A-Rated companies, so you know you are being insured by a company among the best in the industry.',
      es: 'sólo trabajamos con compañias reconocidas mundialmente, en tanto, estarías asegurado con lo mejor de la industria.',
    },
    value: AUTO,
  },
  {
    cta: {
      en: 'next: auto extras',
      es: 'siguiente: auto extras',
    },
    icon: icons.auto,
    label: {
      en: 'paso 4: auto extras',
      es: 'paso 4: auto extras',
    },
    rows: [
      {
        fields: AUTO_INFORMATION_1_2,
        label: {
          en: 'Auto Security',
          es: 'Auto Seguridad',
        },
        label_helper: {
          en: 'Please take a minute to fill your information.',
          es: 'Por favor, llena tu información.',
        },
      },
    ],
    tip: {
      en: 'why choose us?',
      es: 'Porqué deberías hacerlo con nosotros?',
    },
    tipSub: {
      en: 'we only work with A-Rated companies, so you know you are being insured by a company among the best in the industry.',
      es: 'sólo trabajamos con compañias reconocidas mundialmente, en tanto, estarías asegurado con lo mejor de la industria.',
    },
    value: AUTO_SECURITY,
  },
  {
    cta: {
      en: 'next: auto extras',
      es: 'siguiente: auto extras',
    },
    icon: icons.auto,
    label: {
      en: 'paso 5: auto extras',
      es: 'paso 5: auto extras',
    },
    rows: [
      {
        fields: AUTO_INFORMATION_1_3,
        label: {
          en: 'Auto Benefits',
          es: 'Beneficios Auto',
        },
        label_helper: {
          en: 'Please take a minute to fill your information.',
          es: 'Por favor, llena tu información.',
        },
      },
    ],
    tip: {
      en: 'why choose us?',
      es: 'Porqué deberías hacerlo con nosotros?',
    },
    tipSub: {
      en: 'we only work with A-Rated companies, so you know you are being insured by a company among the best in the industry.',
      es: 'sólo trabajamos con compañias reconocidas mundialmente, en tanto, estarías asegurado con lo mejor de la industria.',
    },
    value: AUTO_BENEFITS,
  },
  {
    cta: {
      en: 'submit now your quote',
      es: 'enviar tu solicitud',
    },
    icon: icons.auto,
    label: {
      en: 'paso 6: auto extras',
      es: 'paso 6: auto extras',
    },
    rows: [
      {
        fields: AUTO_INFORMATION_1_4,
        label: {
          en: 'Your Family',
          es: 'Tú familia',
        },
        label_helper: {
          en: 'Please take a minute to fill your information.',
          es: 'Por favor, llena tu información.',
        },
      },
    ],
    tip: {
      en: 'why choose us?',
      es: 'Porqué deberías hacerlo con nosotros?',
    },
    tipSub: {
      en: 'we only work with A-Rated companies, so you know you are being insured by a company among the best in the industry.',
      es: 'sólo trabajamos con compañias reconocidas mundialmente, en tanto, estarías asegurado con lo mejor de la industria.',
    },
    value: AUTO_FAMILY,
  },

  // HEALTH
  {
    icon: icons.general,
    label: {
      en: 'health 1',
      es: 'health 1',
    },
    value: `${HEALTH}_1`,
  },
  {
    icon: icons.general,
    label: {
      en: 'health 1',
      es: 'health 1',
    },
    value: `${HEALTH}_2`,
  },
];

export default QuoteForms;
