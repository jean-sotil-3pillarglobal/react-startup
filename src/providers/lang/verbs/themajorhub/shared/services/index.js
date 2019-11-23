import {
  constants,
} from './../../../../../config';

import CONTENT_SERVICE_1 from './service-1';

// constants
const {
  // categories
  CATEGORY_1,

  // services
  SERVICE_1,
  SERVICE_2,
  SERVICE_3,
  SERVICE_4,
} = constants;

const Services = [
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'get quote now',
      es: 'consultar ahora',
    },
    ico: 'cloud-download',
    id: SERVICE_1,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'service 1',
      es: 'servicio 1',
    },
    svg: '/static/svg/hub.svg',
    title: {
      en: 'service 1',
      es: 'servicio 1',
    },
    url: {
      en: 'service-1',
      es: 'servicio-1',
    },
    value: SERVICE_1,
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      CATEGORY_1,
    ],
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: SERVICE_2,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'service 2',
      es: 'servicio 2',
    },
    title: {
      en: 'service 2',
      es: 'servicio 2',
    },
    url: {
      en: 'service-2',
      es: 'servicio-2',
    },
    value: SERVICE_2,
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      CATEGORY_1,
    ],
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: SERVICE_3,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'service 3',
      es: 'servicio 3',
    },
    title: {
      en: 'service 3',
      es: 'servicio 3',
    },
    url: {
      en: 'service-3',
      es: 'servicio-3',
    },
    value: SERVICE_3,
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      CATEGORY_1,
    ],
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: SERVICE_4,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'service 4',
      es: 'servicio 4',
    },
    title: {
      en: 'service 4',
      es: 'servicio 4',
    },
    url: {
      en: 'service-4',
      es: 'servicio-4',
    },
    value: SERVICE_4,
  },
];

export default Services;
