// constants
export const constants = {
  // categories
  CATEGORY_1: 'category_1',
  CATEGORY_2: 'category_2',
  CATEGORY_3: 'category_3',
  CATEGORY_4: 'category_4',
  CATEGORY_5: 'category_5',

  CLERK_1: 'clerk_1',
  CLERK_2: 'clerk_2',
  CLERK_3: 'clerk_4',

  // general
  GENERAL: 'general',

  // links
  LINK_CONTACT_FORM_1: 'link_contact_form_1',
  LINK_SECTION_1: 'link_section_1',
  LINK_SECTION_2: 'link_section_2',
  LINK_SECTION_3: 'link_section_3',
  LINK_SECTION_4: 'link_section_4',
  LINK_SECTION_5: 'link_section_5',
  LINK_SERVICES_1: 'link_services_1',

  PATHS: {
    SERVICES: {
      en: 'our-services',
      es: 'servicios',
    },
    SERVICES_DETAILS: {
      en: 'free-quote',
      es: 'consulta-gratuita',
    },
  },

  // promos
  PROMO_1: 'promo_1',
  PROMO_2: 'promo_2',
  PROMO_3: 'promo_3',

  // services types
  SERVICE_1: 'service_1',
  SERVICE_2: 'service_2',
  SERVICE_3: 'service_3',
  SERVICE_4: 'service_4',
  SERVICE_5: 'service_5',
  SERVICE_6: 'service_6',
  SERVICE_7: 'service_7',
  SERVICE_8: 'service_8',
  SERVICE_9: 'service_9',
  SERVICE_10: 'service_10',
};

// public routes
export const publics = [
  {
    id: constants.LINK_SECTION_2,
    label: {
      en: 'why choose us?',
      es: '¿porqué escogernos?',
    },
    route: {
      en: '/why-choose-us',
      es: '/quienes-somos',
    },
  },
  {
    id: constants.LINK_SERVICES_1,
    label: {
      en: 'services',
      es: 'servicios',
    },
    route: {
      en: '/services',
      es: '/servicios',
    },
  },
  {
    id: constants.LINK_SECTION_3,
    label: {
      en: 'our team',
      es: 'nuestro equipo',
    },
    route: {
      en: '/our-team',
      es: '/nuestro-equipo',
    },
  },
  {
    id: constants.LINK_SECTION_5,
    label: {
      en: 'blog',
      es: 'blog',
    },
    route: {
      en: '/blog',
      es: '/blog',
    },
  },
  {
    featured: true,
    featured_icon: 'info',
    id: constants.LINK_SECTION_4,
    label: {
      en: 'reach us now',
      es: 'consulta ahora',
    },
    route: {
      en: '/contact',
      es: '/contacto',
    },
  },
];

// private routes
export const privates = [];

//
export const assets = {
  icons: {
    general: 'home',
    service1: 'home',
    service2: 'home',
    service3: 'home',
    service4: 'home',
  },
};


const config = {
  assets,
  defaultLang: 'en',
  rootUrl: 'http://localhost:5000',
  routes: {
    privates,
    publics,
  },
};


export default config;
