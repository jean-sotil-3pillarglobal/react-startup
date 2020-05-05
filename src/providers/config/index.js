// constants
export const constants = {
  // categories
  CATEGORY_1: 'derma-clinica',
  CATEGORY_2: 'derma-estetica',
  CATEGORY_3: 'spa-clinico',
  CATEGORY_4: 'nutri',
  CATEGORY_5: 'terapia-ficia',

  CLERK_1: 'clerk_1',
  CLERK_2: 'clerk_2',
  CLERK_3: 'clerk_3',
  CLERK_4: 'clerk_4',
  CLERK_5: 'clerk_5',
  CLERK_6: 'clerk_6',
  CLERK_7: 'clerk_7',

  // general
  GENERAL: 'general',

  // links
  LINK_CONTACT_FORM_1: 'link_contact_form_1',
  LINK_CONTACT_FORM_2: 'link_contact_form_2',
  LINK_SECTION_1: 'link_section_1',
  LINK_SECTION_2: 'link_section_2',
  LINK_SECTION_3: 'link_section_3',
  LINK_SECTION_4: 'link_section_4',
  LINK_SECTION_5: 'link_section_5',
  LINK_SERVICES_1: 'link_services_1',

  PATHS: {
    SERVICES: {
      en: 'specialities',
      es: 'especialidades',
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
];

export const featured = [{
  id: constants.LINK_SECTION_4,
  label: {
    en: 'cita gratuita online',
    es: 'cita gratuita online',
  },
  route: {
    en: '/contact',
    es: '/contacto',
  },
}];

// private routes
export const privates = [];

// social links
export const social = [
  {
    icon: '/src/static/svg/social/fb.svg',
    isFab: true,
    label: 'facebook',
    link: 'https://www.facebook.com/AQUApz/',
  },
  {
    icon: '/src/static/svg/social/ig.svg',
    isFab: true,
    label: 'instagram',
    link: 'https://www.instagram.com/clinicaaquapz/',
  },
  {
    icon: '/src/static/svg/social/email.svg',
    isFab: true,
    label: 'email',
    link: 'mailto:contacto@clinicaaqua.com',
  },
];

export const info = [
  {
    icon: '/src/static/svg/social/phone.svg',
    isFab: false,
    label: '+506 2772-0960',
  },
  {
    icon: '/src/static/svg/social/phone.svg',
    isFab: false,
    label: '+506 8801-2626',
  },
  {
    icon: '/src/static/svg/social/email.svg',
    isFab: false,
    label: 'contacto@clinicaaqua.com',
  },
  {
    icon: '/src/static/svg/social/location.svg',
    isFab: false,
    label: 'Pérez Zeledón, Costa Rica',
  },
];

export const langs = [
  {
    label: {
      en: 'english',
      es: 'spanish',
    },
    value: 'en',
  },
  {
    label: {
      en: 'ingles',
      es: 'español',
    },
    value: 'es',
  },
];

//
export const assets = {
  icons: {
    general: 'local_hospital',
    service1: 'local_hospital',
    service2: 'local_hospital',
    service3: 'local_hospital',
    service4: 'local_hospital',
  },
};

const config = {
  assets,
  defaultLang: 'es',
  info,
  langs,
  routes: {
    featured,
    privates,
    publics,
  },
  social,
};


export default config;
