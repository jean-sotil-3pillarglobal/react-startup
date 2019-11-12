import {
  constants,
} from './../../../../../config';

// constants
const {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
} = constants;

const Services = [
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
      en: 'category 1',
      es: 'categoria 1',
    },
    url: {
      en: '/services/category-1',
      es: '/servicios/categoria-1',
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
      en: 'category 2',
      es: 'categoria 2',
    },
    url: {
      en: '/services/category-2',
      es: '/servicios/categoria-2',
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
    id: CATEGORY_3,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    title: {
      en: 'category 3',
      es: 'categoria 3',
    },
    url: {
      en: '/services/category-3',
      es: '/servicios/categoria-3',
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
    id: CATEGORY_4,
    image: {
      desktop: '/static/images/d-image-test.jpg',
      mobile: '/static/images/m-image-test.jpg',
    },
    title: {
      en: 'category 4',
      es: 'categoria 4',
    },
    url: {
      en: '/services/category-4',
      es: '/servicios/categoria-4',
    },
  },
];

export default Services;
