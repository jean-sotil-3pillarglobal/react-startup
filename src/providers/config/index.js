// constants
export const constants = {
  // general
  GENERAL: 'GENERAL',
  // promos
  PROMO_1: 'PROMO_1',
  PROMO_2: 'PROMO_2',
  PROMO_3: 'PROMO_3',
  // services types
  SERVICE_1: 'SERVICE_1',
  SERVICE_2: 'SERVICE_2',
  SERVICE_3: 'SERVICE_3',
  SERVICE_4: 'SERVICE_4',
  SERVICE_5: 'SERVICE_5',
  SERVICE_6: 'SERVICE_6',
  SERVICE_7: 'SERVICE_7',
  SERVICE_8: 'SERVICE_8',
};

// public routes
export const publics = [
  {
    label: {
      en: 'Why Choose Us?',
      es: '¿Porqué escogernos?',
    },
    route: {
      en: '/why-chooose-us',
      es: '/quienes-somos',
    },
  },
  {
    label: {
      en: 'Services',
      es: 'Servicios',
    },
    route: {
      en: '/services',
      es: '/servicios',
    },
  },
  {
    label: {
      en: 'Blog',
      es: 'Blog',
    },
    route: {
      en: '/blog',
      es: '/blog',
    },
  },
  {
    featured: true,
    featured_icon: 'info',
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
  rootUrl: 'http://localhost:5000',
  routes: {
    privates,
    publics,
  },
};


export default config;
