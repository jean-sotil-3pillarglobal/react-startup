import LangProxy from '../../../../utils/lang.proxy';

import {
  constants,
  info,
  langs,
  publics,
  social,
} from '../../../../config';

import categories from '../shared/categories';
import clerks from '../shared/clerks';
import forms from '../shared/forms';
import promos from '../shared/promos';
import services from '../shared/services';

const {
  LINK_CONTACT_FORM_1,
  LINK_SECTION_1,
  LINK_SECTION_2,
  LINK_SECTION_4,
  LINK_SECTION_5,
  LINK_SERVICES_1,
} = constants;

const Verbiage = {
  commons: {
    clerks_1: {
      clerks,
      title: {
        en: 'our specialists',
        es: 'nuestros especialistas',
      },
    },
    contact_1: {
      back: {
        en: 'previous',
        es: 'anterior',
      },
      categories,
      forms,
      id: LINK_CONTACT_FORM_1,
      services,
    },
    default: {},
    services_1: {
      body: {
        en: 'special enrollment: even though open enrollment is closed, you may still be able to get a health plan if you had a certain life changing event. continue to shop and your eligibility will be determined when you complete your marketplace application. if you have questions at any point, please feel free to chat or call us.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      categories,
      id: LINK_SERVICES_1,
      services,
      title: {
        en: 'Conozca Our Specialities',
        es: 'Conozca Nuestras Especialidades',
      },
    },
  },
  components: {
    footer: {
      column: [
        {
          items: info,
          title: {
            en: 'Contact us',
            es: 'Contactenos',
          },
        },
        {
          items: social,
          title: {
            en: 'Connect with us',
            es: 'Conectese con nosotros',
          },
        },
      ],
      langs,
      logo: {
        desktop: '/src/static/images/logo.jpg',
        mobile: '/src/static/images/logo.jpg',
      },
    },
    header: {
      cta: [
        {
          name: {
            en: 'get a quote',
            es: 'aprender más',
          },
        },
      ],
      logo: {
        desktop: '/src/static/images/logo.jpg',
        mobile: '/src/static/images/logo.jpg',
      },
      publics,
      social,
      title: {
        en: 'clinica aqua',
        es: 'clinica aqua',
      },

    },
  },
  err404: {
    index: {
      title: {
        en: 'page not found.',
        es: 'la página solicitada no fue encontrada.',
      },
    },
  },
  headers: {
    home: {
      description: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      keywords: {
        en: 'insurances, others',
        es: 'seguros, otros',
      },
      title: {
        en: 'Clinica Aqua | Health Care | Welcome',
        es: 'Clinica Aqua | Salud | Bienvenido',
      },
    },
    services: {
      description: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      keywords: {
        en: 'insurances, others',
        es: 'seguros, otros',
      },
      title: {
        en: 'Clinica Aqua | Healthcare | Healthcare Help',
        es: 'Clinica Aqua | Salud | Solicitar Ayuda',
      },
    },
  },
  home: {
    banner_1: {
      items: [
        {
          alt: {
            en: 'dysport',
            es: 'dysport',
          },
          logo: '/src/static/images/logos/dysport.png',
        },
        {
          alt: {
            en: 'EMSCULPT',
            es: 'EMSCULPT',
          },
          logo: '/src/static/images/logos/emsculpt.png',
        },
        {
          alt: {
            en: 'fotona',
            es: 'fotona',
          },
          logo: '/src/static/images/logos/fotona.png',
        },
        {
          alt: {
            en: 'geneo',
            es: 'geneo',
          },
          logo: '/src/static/images/logos/geneo.png',
        },
        {
          alt: {
            en: 'lumenis',
            es: 'lumenis',
          },
          logo: '/src/static/images/logos/lumenis.png',
        },
        {
          alt: {
            en: 'neauvia',
            es: 'neauvia',
          },
          logo: '/src/static/images/logos/neauvia.png',
        },
        {
          alt: {
            en: 'tentrek',
            es: 'tentrek',
          },
          logo: '/src/static/images/logos/tentrek.png',
        },
        {
          alt: {
            en: 'venus',
            es: 'venus',
          },
          logo: '/src/static/images/logos/venus.png',
        },
      ],
    },
    section_1: {
      background: '/src/static/images/d-bg-1.png',
      background_show: true,
      cta: {
        en: 'check available services',
        es: 'ver servicios disponibles',
      },
      id: LINK_SECTION_1,
      logo: {
        desktop: '/src/static/images/logo.jpg',
        mobile: '/src/static/images/logo.jpg',
      },
      subtitle: {
        en: '<span>we have the best plan for your health care needs and budget. <br/>get a free online quote for affordable health insurance</span>',
        es: '<span>la mejor clínica de dermatologia, <br/>fisioestetica y nutrición en la zona sur.</span>',
      },
      svg: '/src/static/svg/coming.svg',
      svg_show: false,
      title: {
        en: '<span>Welcome, we are Clínica Aqua.</span>',
        es: '<span>Bienvenido, somos Clínica Aqua.</span>',
      },
    },
    section_2: {
      body: {
        en: 'with over 30 years of experience, we have helped tens of thousands of people get the right coverage to meet their needs. simply click the below button to get a no obligation quote.',
        es: 'Nuestra sede esta ubicada en san isidro de el general perez zeledon, brindamos una amplia gama de servicios dermatologicos, dermatoesteticos y fisioesteticos. Contamos con alta tecnologia y personal calificado.',
      },
      cta: {
        en: 'create your free quote',
        es: 'consultar ahora',
      },
      id: LINK_SECTION_2,
      subtitle: {
        en: '<span>Get our health services</br> information, quick and free.</span>',
        es: '<span>Obtén información sobre nuestros servicios</br> de manera fácil y gratuita.</span>',
      },
      title: {
        en: 'We work with the best',
        es: 'Trabajamos con los mejores',
      },
    },
    section_4: {
      id: LINK_SECTION_4,
      title: {
        en: 'Start your quote now. <br/>Start now.',
        es: 'La valoración es gratuita.<br/> Llená nuestro formulario en linea.',
      },
    },
    section_5: {
      body: {
        en: 'special enrollment: even though open enrollment is closed, you may still be able to get a health plan if you had a certain life changing event. continue to shop and your eligibility will be determined when you complete your marketplace application. if you have questions at any point, please feel free to chat or call us.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      id: LINK_SECTION_5,
      items: [
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 1',
            es: 'aprender más 1',
          },
          ico: 'cloud-download',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 1',
            es: 'item 1',
          },
          type: 'health',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 2',
            es: 'aprender más 2',
          },
          ico: 'processor',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 2',
            es: 'item 2',
          },
          type: 'dental',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 3',
            es: 'aprender más 3',
          },
          ico: 'cloud-download',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 3',
            es: 'item 3',
          },
          type: 'health',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 4',
            es: 'aprender más 4',
          },
          ico: 'print',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 4',
            es: 'item 4',
          },
          type: 'boat',
        },
      ],
      title: {
        en: 'blog',
        es: 'conoce más <br/>en nuestro blog',
      },
    },
  },
  services: {
    section_1: {
      back: {
        en: 'Back to Homepage',
        es: 'Volver al Inicio',
      },
      categories,
      id: 'services_index',
      logo: {
        desktop: '/src/static/images/logo.jpg',
        mobile: '/src/static/images/logo.jpg',
      },
      promos,
      services,
    },
  },
};

export default function VerbiageSchema (id) {
  return LangProxy(Verbiage, id);
}
