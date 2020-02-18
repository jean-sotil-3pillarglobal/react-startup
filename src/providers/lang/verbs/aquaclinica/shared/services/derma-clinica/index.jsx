import {
  constants,
} from './../../../../../../config';

import CONTENT_SERVICE_1 from './escleroterapia';
import CONTENT_SERVICE_2 from './alergias';

// constants
const {
  // categories
  CATEGORY_2,

  // services
  SERVICE_1,
  SERVICE_2,
  SERVICE_3,
  SERVICE_4,
  SERVICE_5,
} = constants;

const Services = [
  {
    background: `/static/images/${CATEGORY_2}/1.jpg`,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'get quote now',
      es: 'consultar ahora',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_1}`,
    image: {
      desktop: `/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'escleroterapia',
      es: 'escleroterapia',
    },
    title: {
      en: 'escleroterapia',
      es: 'escleroterapia',
    },
    url: {
      en: 'escleroterapia',
      es: 'escleroterapia',
    },
    value: `${CATEGORY_2}-${SERVICE_1}`,
  },
  {
    background: `/static/images/${CATEGORY_2}/1.jpg`,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    featured: true,
    featuredText: {
      en: '5% discount',
      es: '5% descuento',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_2}`,
    image: {
      desktop: `/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'alergías',
      es: 'alergías',
    },
    title: {
      en: 'alergías',
      es: 'alergías',
    },
    url: {
      en: 'alergias',
      es: 'alergias',
    },
    value: `${CATEGORY_2}-${SERVICE_2}`,
  },
  {
    background: `/static/images/${CATEGORY_2}/1.jpg`,
    categories: [
      CATEGORY_2,
    ],
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_3}`,
    image: {
      desktop: `/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'tratamiento para hongos en uña',
      es: 'tratamiento para hongos en uña',
    },
    title: {
      en: 'tratamiento para hongos en uña',
      es: 'tratamiento para hongos en uña',
    },
    url: {
      en: 'tratamiento-para-hongos-en-uña',
      es: 'tratamiento-para-hongos-en-uña',
    },
    value: `${CATEGORY_2}-${SERVICE_3}`,
  },
  {
    background: `/static/images/${CATEGORY_2}/1.jpg`,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_4}`,
    image: {
      desktop: `/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'diagnóstico y tratamiento para cáncer de piel',
      es: 'diagnóstico y tratamiento para cáncer de piel',
    },
    title: {
      en: 'diagnóstico y tratamiento para cáncer de piel',
      es: 'diagnóstico y tratamiento para cáncer de piel',
    },
    url: {
      en: 'diagnostico-y-tratamiento-para-cancer-de-piel',
      es: 'diagnostico-y-tratamiento-para-cancer-de-piel',
    },
    value: `${CATEGORY_2}-${SERVICE_4}`,
  },
  {
    background: `/static/images/${CATEGORY_2}/1.jpg`,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_5}`,
    image: {
      desktop: `/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'dermatitis y enfermedades de la piel',
      es: 'dermatitis y enfermedades de la piel',
    },
    title: {
      en: 'dermatitis y enfermedades de la piel',
      es: 'dermatitis y enfermedades de la piel',
    },
    url: {
      en: 'dermatitis-y-enfermedades-de-la-piel',
      es: 'dermatitis-y-enfermedades-de-la-piel',
    },
    value: `${CATEGORY_2}-${SERVICE_5}`,
  },
];

export default Services;
