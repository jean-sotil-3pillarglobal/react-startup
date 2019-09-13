// constants
export const constants = {
  // auto
  AUTO: 'auto',
  AUTO_BENEFITS: 'auto_benefits',
  AUTO_FAMILY: 'auto_family',
  AUTO_SECURITY: 'auto_security',

  // general
  GENERAL: 'general',

  // health
  HEALTH: 'health',
};

// public routes
export const publics = [
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
    featured_icon: 'star',
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
