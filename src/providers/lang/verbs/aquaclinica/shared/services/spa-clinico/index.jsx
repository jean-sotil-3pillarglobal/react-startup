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
    background: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/85256415_3117063394970639_905862560400539648_o.jpg?_nc_cat=108&_nc_sid=2d5d41&_nc_oc=AQnlVnZD_pJxFkphrzCEHqkBU7UqIwdjcQ-Gde4Z1ST1U-5TPksZfzAjJjAka5USL7M&_nc_ht=scontent.fsyq2-1.fna&oh=d66b7308421338a2516fa128665322ec&oe=5EB59A94',
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_1}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/emsculpt.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/emsculpt.jpg`,
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
    background: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/p960x960/88374516_3135287593148219_8145759674226966528_o.jpg?_nc_cat=109&_nc_sid=2d5d41&_nc_oc=AQmijZ6cRvUJ5rKdI-Em3TYEMR61bZKGFwd9fGuOG6IpXgI5q2dJ4jdsac7MPQ0VK0Q&_nc_ht=scontent.fsyq2-1.fna&_nc_tp=6&oh=3717ecb7b6f2d31d412d217ba9c5aeb3&oe=5EB6F0DD',
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_2}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/venus-legacy.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/venus-legacy.jpg`,
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
    background: `/src/static/images/${CATEGORY_3}/ondas-de-choque.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_3,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_3}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/ondas-de-choque.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/ondas-de-choque.jpg`,
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
    background: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/82018340_1174937352710356_5549820483152426103_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=cmU4-Me5pkoAX-DFmvF&oh=a4401788d66e0fe9d64796cc0679f3cb&oe=5EBB7B33',
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_4,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_4}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/oxygeneo.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/oxygeneo.jpg`,
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
    background: `/src/static/images/${CATEGORY_3}/preso-terapia.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_5,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_5}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/preso-terapia.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/preso-terapia.jpg`,
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
    background: `/src/static/images/${CATEGORY_3}/meso-terapia.jpg`,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_6,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_6}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/meso-terapia.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/meso-terapia.jpg`,
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
    background: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/32130348_1944831762193814_8809183850597974016_o.jpg?_nc_cat=106&_nc_sid=2d5d41&_nc_oc=AQl3MZz6Zgx0wg1-66_bZ7dUdJQSl-8Qw0r2Hc5Qf-M_xgS1I36QuZqt5udQ36OOnN0&_nc_ht=scontent.fsyq2-1.fna&oh=8666d6357f3f10012c4627996e31b775&oe=5EB73DAA',
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_7,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_7}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/carboxiterapia.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/carboxiterapia.jpg`,
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
