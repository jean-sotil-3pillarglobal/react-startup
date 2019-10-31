import {
  constants,
} from './../../../../../config';

import CONTENT_SERVICE_1 from './service-1';

// constants
const {
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
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: SERVICE_1,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    svg: '/static/svg/hub.svg',
    title: {
      en: 'auto insurance 1',
      es: 'seguro automóvil 1',
    },
    url: {
      en: '/services/service-1',
      es: '/servicios/servicio-1',
    },
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
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
    title: {
      en: 'auto insurance 2',
      es: 'seguro automóvil 2',
    },
    url: {
      en: '/services/service-2',
      es: '/servicios/servicio-2',
    },
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
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
    title: {
      en: 'auto insurance 3',
      es: 'seguro automóvil 3',
    },
    url: {
      en: '/services/service-3',
      es: '/servicios/servicio-3',
    },
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
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
    title: {
      en: 'auto insurance 4',
      es: 'seguro automóvil 4',
    },
    url: {
      en: '/services/service-4',
      es: '/servicios/servicio-4',
    },
  },
];

export default Services;
