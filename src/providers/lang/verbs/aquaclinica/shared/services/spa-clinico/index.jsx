import {
  constants,
} from './../../../../../../config';

import CONTENT_SERVICE_1 from './emsculpt';
import CONTENT_SERVICE_2 from './venus-legacy';
import CONTENT_SERVICE_3 from './ondas-de-choque';
import CONTENT_SERVICE_4 from './oxygeneo';
import CONTENT_SERVICE_5 from './preso-terapia';
import CONTENT_SERVICE_6 from './meso-terapia';
import CONTENT_SERVICE_7 from './carboxiterapia';

// constants
const {
  // categories
  CATEGORY_3,

  // services
  SERVICE_1,
  SERVICE_2,
  SERVICE_3,
  SERVICE_4,
  SERVICE_5,
  SERVICE_6,
  SERVICE_7,
} = constants;

const Services = [
  {
    background: `/static/images/${CATEGORY_3}/1.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_1}`,
    image: {
      desktop: `/static/images/${CATEGORY_3}/1.jpg`,
      mobile: `/static/images/${CATEGORY_3}/1.jpg`,
    },
    label: {
      en: 'EMSCULPT',
      es: 'EMSCULPT',
    },
    title: {
      en: 'EMSCULPT',
      es: 'EMSCULPT',
    },
    url: {
      en: 'emsculpt',
      es: 'emsculpt',
    },
    value: `${CATEGORY_3}-${SERVICE_1}`,
  },
  {
    background: `/static/images/${CATEGORY_3}/1.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_2}`,
    image: {
      desktop: `/static/images/${CATEGORY_3}/1.jpg`,
      mobile: `/static/images/${CATEGORY_3}/1.jpg`,
    },
    label: {
      en: 'venus legacy',
      es: 'venus legacy',
    },
    title: {
      en: 'venus legacy',
      es: 'venus legacy',
    },
    url: {
      en: 'venus-legacy',
      es: 'venus-legacy',
    },
    value: `${CATEGORY_3}-${SERVICE_2}`,
  },
  {
    background: `/static/images/${CATEGORY_3}/1.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_3,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_3}`,
    image: {
      desktop: `/static/images/${CATEGORY_3}/1.jpg`,
      mobile: `/static/images/${CATEGORY_3}/1.jpg`,
    },
    label: {
      en: 'ondas de choque',
      es: 'ondas de choque',
    },
    title: {
      en: 'ondas de choque',
      es: 'ondas de choque',
    },
    url: {
      en: 'ondas-de-choque',
      es: 'ondas-de-choque',
    },
    value: `${CATEGORY_3}-${SERVICE_3}`,
  },
  {
    background: `/static/images/${CATEGORY_3}/1.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_4,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_4}`,
    image: {
      desktop: `/static/images/${CATEGORY_3}/1.jpg`,
      mobile: `/static/images/${CATEGORY_3}/1.jpg`,
    },
    label: {
      en: 'oxygeneo',
      es: 'oxygeneo',
    },
    title: {
      en: 'oxygeneo',
      es: 'oxygeneo',
    },
    url: {
      en: 'oxygeneo',
      es: 'oxygeneo',
    },
    value: `${CATEGORY_3}-${SERVICE_4}`,
  },
  {
    background: `/static/images/${CATEGORY_3}/1.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_5,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_5}`,
    image: {
      desktop: `/static/images/${CATEGORY_3}/1.jpg`,
      mobile: `/static/images/${CATEGORY_3}/1.jpg`,
    },
    label: {
      en: 'preso-terapia',
      es: 'preso-terapia',
    },
    title: {
      en: 'preso-terapia',
      es: 'preso-terapia',
    },
    url: {
      en: 'preso-terapia',
      es: 'preso-terapia',
    },
    value: `${CATEGORY_3}-${SERVICE_5}`,
  },
  {
    background: `/static/images/${CATEGORY_3}/1.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_6,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_6}`,
    image: {
      desktop: `/static/images/${CATEGORY_3}/1.jpg`,
      mobile: `/static/images/${CATEGORY_3}/1.jpg`,
    },
    label: {
      en: 'meso-terapia',
      es: 'meso-terapia',
    },
    title: {
      en: 'meso-terapia',
      es: 'meso-terapia',
    },
    url: {
      en: 'meso-terapia',
      es: 'meso-terapia',
    },
    value: `${CATEGORY_3}-${SERVICE_6}`,
  },
  {
    background: `/static/images/${CATEGORY_3}/1.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_7,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_7}`,
    image: {
      desktop: `/static/images/${CATEGORY_3}/1.jpg`,
      mobile: `/static/images/${CATEGORY_3}/1.jpg`,
    },
    label: {
      en: 'carboxiterapia',
      es: 'carboxiterapia',
    },
    title: {
      en: 'carboxiterapia',
      es: 'carboxiterapia',
    },
    url: {
      en: 'carboxiterapia',
      es: 'carboxiterapia',
    },
    value: `${CATEGORY_3}-${SERVICE_7}`,
  },
];

export default Services;
