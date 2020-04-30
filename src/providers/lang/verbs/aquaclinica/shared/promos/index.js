import {
  constants,
} from './../../../../../config';

// constants
const {
  GENERAL,
  PROMO_1,
  PROMO_2,
  PROMO_3,
  SERVICE_1,
} = constants;

const Promos = [
  {
    alt: {
      en: 'description',
      es: 'descripción',
    },
    id: PROMO_1,
    image: {
      desktop: '/src/static/images/d-image-test.jpg',
      mobile: '/src/static/images/m-image-test.jpg',
    },
    type: [GENERAL, SERVICE_1],
  },
  {
    alt: {
      en: 'description',
      es: 'descripción',
    },
    id: PROMO_2,
    image: {
      desktop: '/src/static/images/d-image-test.jpg',
      mobile: '/src/static/images/m-image-test.jpg',
    },
    type: [GENERAL, SERVICE_1],
  },
  {
    alt: {
      en: 'description',
      es: 'descripción',
    },
    id: PROMO_3,
    image: {
      desktop: '/src/static/images/d-image-test.jpg',
      mobile: '/src/static/images/m-image-test.jpg',
    },
    type: [GENERAL, SERVICE_1],
  },
];

export default Promos;
