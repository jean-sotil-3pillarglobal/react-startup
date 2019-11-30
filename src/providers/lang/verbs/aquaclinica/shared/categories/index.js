import {
  constants,
} from './../../../../../config';

// constants
const {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
  CATEGORY_5,
} = constants;

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
      en: 'dermatología estética',
      es: 'dermatología estética',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: '/services/dermatologia-estetica',
      es: '/servicios/dermatologia-estetica',
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
      en: '/services/dermatologia-clinica',
      es: '/servicios/dermatologia-clinica',
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
      en: '/services/estetica-y-spa-clinico',
      es: '/servicios/estetica-y-spa-clinico',
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
      en: '/services/nutricion',
      es: '/servicios/nutricion',
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
      en: '/services/terapia-fisica',
      es: '/servicios/terapia-fisica',
    },
  },
];

export default Services;
