import {
  constants,
} from './../../../../../config';

import {
  CreateUrlOnePath,
} from './../../../../../utils/url.formatter';

// constants
const {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
  CATEGORY_5,


  PATHS: {
    SERVICES,
  },
} = constants;

const url = CreateUrlOnePath(SERVICES);

const Services = [
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: `
        lorem ipsum dolor sit amet, consectetuer adipiscing elit. lorem ipsum dolor sit amet, consectetuer adipiscing elit. lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/><br/>
      `,
      es: `
        lorem ipsum dolor sit amet, <strong>consectetuer adipiscing elit.</strong> lorem ipsum dolor sit amet, consectetuer adipiscing elit. lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/><br/>
      `,
    },
    ico: 'home',
    id: CATEGORY_1,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    images: [
      {
        desktop: '/static/images/d-image-test.jpg',
        mobile: '/static/images/m-image-test.jpg',
      },
      {
        desktop: '/static/images/d-image-test.jpg',
        mobile: '/static/images/m-image-test.jpg',
      },
    ],
    svg: '/static/svg/team_work.svg',
    title: {
      en: 'beauty and dermatology',
      es: 'dermatología estética',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('beauty-and-dermatology', 'en'),
      es: url('dermatologia-estetica', 'es'),
    },
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    ico: 'cloud-download',
    id: CATEGORY_2,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    images: [
      {
        desktop: '/static/images/d-image-test.jpg',
        mobile: '/static/images/m-image-test.jpg',
      },
      {
        desktop: '/static/images/d-image-test.jpg',
        mobile: '/static/images/m-image-test.jpg',
      },
    ],
    svg: '/static/svg/team_work.svg',
    title: {
      en: 'dermatología clinica',
      es: 'dermatología clinica',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('dermatologia-clinica', 'en'),
      es: url('dermatologia-clinica', 'es'),
    },
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: CATEGORY_3,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    title: {
      en: 'estética y spa clínico',
      es: 'estética y spa clínico',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('estetica-y-spa-clinico', 'en'),
      es: url('estetica-y-spa-clinico', 'es'),
    },
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: CATEGORY_4,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    title: {
      en: 'nutricion',
      es: 'nutricion',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('nutricion', 'en'),
      es: url('nutricion', 'es'),
    },
  },
  {
    background: '/static/images/m-image-test.jpg',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: CATEGORY_5,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    title: {
      en: 'terapia fisica',
      es: 'terapia fisica',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('terapia-fisica', 'en'),
      es: url('terapia-fisica', 'es'),
    },
  },
];

export default Services;
