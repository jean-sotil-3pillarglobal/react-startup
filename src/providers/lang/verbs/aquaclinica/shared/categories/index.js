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
    background: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/61222867_599969850486835_2454545587056835682_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=d1kcgW2fcf8AX9gAHXD&oh=00b3f3b54ae58d9eb7c9144338a2c6b8&oe=5EB9ADF2',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_1,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/derma-clinica.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/derma-clinica.jpg`,
    },
    images: [
      {
        desktop: `/src/static/images/${CATEGORY_1}/derma-clinica-1.jpg`,
        mobile: `/src/static/images/${CATEGORY_1}/derma-clinica-1.jpg`,
      },
      {
        desktop: `/src/static/images/${CATEGORY_1}/derma-clinica-1.jpg`,
        mobile: `/src/static/images/${CATEGORY_1}/derma-clinica-1.jpg`,
      },
    ],
    svg: '/src/static/svg/team_work.svg',
    title: {
      en: 'clinic dermatology',
      es: 'dermatología clinica',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('clinic-dermatology', 'en'),
      es: url('dermatologia-clinica', 'es'),
    },
  },
  {
    background: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/19985133_245235955981183_6249423126464036864_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=JxSeHkYVZzcAX89BCTB&oh=6f27c84d5f7baf8811be61b2ca9e97d8&oe=5EBB9FBA',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_2,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/3.png`,
      mobile: `/src/static/images/${CATEGORY_2}/3.png`,
    },
    images: [
      {
        desktop: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/90985031_3187027017974276_7358354085671600128_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_oc=AQnV2fBTKN5GGlBW_KxH0tA6IYy-i-qdPIhijmEio8FB91S6eYbfPrqez7kUJESkBGo&_nc_ht=scontent.fsyq2-1.fna&oh=a3b546be40ead4bcde9d17f510aec2ed&oe=5EB5FFEB',
        mobile: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/90985031_3187027017974276_7358354085671600128_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_oc=AQnV2fBTKN5GGlBW_KxH0tA6IYy-i-qdPIhijmEio8FB91S6eYbfPrqez7kUJESkBGo&_nc_ht=scontent.fsyq2-1.fna&oh=a3b546be40ead4bcde9d17f510aec2ed&oe=5EB5FFEB',
      },
      {
        desktop: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/90985031_3187027017974276_7358354085671600128_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_oc=AQnV2fBTKN5GGlBW_KxH0tA6IYy-i-qdPIhijmEio8FB91S6eYbfPrqez7kUJESkBGo&_nc_ht=scontent.fsyq2-1.fna&oh=a3b546be40ead4bcde9d17f510aec2ed&oe=5EB5FFEB',
        mobile: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/90985031_3187027017974276_7358354085671600128_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_oc=AQnV2fBTKN5GGlBW_KxH0tA6IYy-i-qdPIhijmEio8FB91S6eYbfPrqez7kUJESkBGo&_nc_ht=scontent.fsyq2-1.fna&oh=a3b546be40ead4bcde9d17f510aec2ed&oe=5EB5FFEB',
      },
    ],
    svg: '/src/static/svg/team_work.svg',
    title: {
      en: 'estetic dermatology',
      es: 'dermatología estética',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('estetic-dermatology', 'en'),
      es: url('dermatologia-estetica', 'es'),
    },
  },
  {
    background: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/92382469_3188032791228262_5207382019394217333_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=34gopARCYQ4AX9711UT&oh=28474904b4de72ce0dea0c3dcef4e448&oe=5EBA8490',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_3,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/spa-clinico.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/spa-clinico.jpg`,
    },
    images: [
      {
        desktop: `/src/static/images/${CATEGORY_3}/spa-clinico-1.jpg`,
        mobile: `/src/static/images/${CATEGORY_3}/spa-clinico-1.jpg`,
      },
      {
        desktop: `/src/static/images/${CATEGORY_3}/spa-clinico-2.jpg`,
        mobile: `/src/static/images/${CATEGORY_3}/spa-clinico-2.jpg`,
      },
    ],
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
    background: `/src/static/images/${CATEGORY_4}/nutricion.jpg`,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_4,
    image: {
      desktop: `/src/static/images/${CATEGORY_4}/3.jpg`,
      mobile: `/src/static/images/${CATEGORY_4}/3.jpg`,
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
    background: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/92215681_641448976430563_2703385061286868230_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=o4zx3udX-lAAX9vMBEr&oh=cdd5a5a6f1bee8b81461f222abebb8a7&oe=5EB90D27',
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_5,
    image: {
      desktop: `/src/static/images/${CATEGORY_5}/3.jpg`,
      mobile: `/src/static/images/${CATEGORY_5}/3.jpg`,
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
