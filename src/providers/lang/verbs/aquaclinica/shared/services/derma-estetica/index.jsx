import {
  constants,
} from './../../../../../../config';

import CONTENT_SERVICE_1 from './service-1';
import CONTENT_SERVICE_2 from './service-2';

// constants
const {
  // categories
  CATEGORY_1,

  // services
  SERVICE_1,
  SERVICE_2,
  SERVICE_3,
  SERVICE_4,
  SERVICE_5,
} = constants;


const currentCategory = CATEGORY_1;

const Services = [
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      currentCategory,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'get quote now',
      es: 'consultar ahora',
    },
    featured: true,
    featuredText: {
      en: 'new',
      es: 'nuevo',
    },
    ico: 'cloud-download',
    id: `${currentCategory}-${SERVICE_1}`,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'rellenos',
      es: 'rellenos',
    },
    title: {
      en: 'rellenos',
      es: 'rellenos',
    },
    url: {
      en: '/rellenos',
      es: '/rellenos',
    },
    value: `${currentCategory}-${SERVICE_1}`,
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      currentCategory,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${currentCategory}-${SERVICE_2}`,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'toxina botulinica',
      es: 'toxina botulinica',
    },
    title: {
      en: 'toxina botulinica',
      es: 'toxina botulinica',
    },
    url: {
      en: '/toxina-botulinica',
      es: '/toxina-botulinica',
    },
    value: `${currentCategory}-${SERVICE_2}`,
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      currentCategory,
    ],
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${currentCategory}-${SERVICE_3}`,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'rejuvenecimiento láser',
      es: 'rejuvenecimiento láser',
    },
    title: {
      en: 'rejuvenecimiento láser',
      es: 'rejuvenecimiento láser',
    },
    url: {
      en: '/rejuvenecimiento-laser',
      es: '/rejuvenecimiento-laser',
    },
    value: `${currentCategory}-${SERVICE_3}`,
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      currentCategory,
    ],
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${currentCategory}-${SERVICE_4}`,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'tratamiento láser para manchas e hiperpigmentación',
      es: 'tratamiento láser para manchas e hiperpigmentación',
    },
    title: {
      en: 'tratamiento láser para manchas e hiperpigmentación',
      es: 'tratamiento láser para manchas e hiperpigmentación',
    },
    url: {
      en: '/tratamiento-laser-para-manchas-e-hiperpigmentacion',
      es: '/tratamiento-laser-para-manchas-e-hiperpigmentacion',
    },
    value: `${currentCategory}-${SERVICE_4}`,
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    categories: [
      currentCategory,
    ],
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: `${currentCategory}-${SERVICE_5}`,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    label: {
      en: 'eliminación de tatuajes',
      es: 'eliminación de tatuajes',
    },
    title: {
      en: 'eliminación de tatuajes',
      es: 'eliminación de tatuajes',
    },
    url: {
      en: '/eliminación-de-tatuajes',
      es: '/eliminación-de-tatuajes',
    },
    value: `${currentCategory}-${SERVICE_5}`,
  },
];

export default Services;
