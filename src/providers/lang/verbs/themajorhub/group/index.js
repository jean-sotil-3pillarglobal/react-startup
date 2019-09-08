import LangProxy from '../../../../utils/lang.proxy';

import {
  publics,
} from '../../../../config';

import forms from '../shared/forms';

const Verbiage = {
  components: {
    header: {
      cta: [
        {
          name: {
            en: 'get a quote',
            es: 'aprender más',
          },
        },
      ],
      publics,
      title: {
        en: 'the ◈ majorhub',
        es: 'the ◈ majorhub',
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
        en: 'the majorhub | health insurances | welcome',
        es: 'the majorhub | health seguros | bienvenido',
      },
    },
    quote: {
      description: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      keywords: {
        en: 'insurances, others',
        es: 'seguros, otros',
      },
      title: {
        en: 'the majorhub | health insurances | find your agent',
        es: 'the majorhub | health seguros | solicitar tu agente',
      },
    },
  },
  home: {
    banner_1: {
      items: [
        {
          alt: {
            en: 'aetna insurance',
            es: 'aetna seguro',
          },
          logo: '/static/images/logos/aetna.png',
        },
        {
          alt: {
            en: 'ambetter insurance',
            es: 'ambetter seguro',
          },
          logo: '/static/images/logos/ambetter.png',
        },
        {
          alt: {
            en: 'blue cross insurance',
            es: 'blue cross seguro',
          },
          logo: '/static/images/logos/bluecross.png',
        },
        {
          alt: {
            en: 'cigna insurance',
            es: 'cigna seguro',
          },
          logo: '/static/images/logos/cigna.png',
        },
        {
          alt: {
            en: 'coventry insurance',
            es: 'coventry seguro',
          },
          logo: '/static/images/logos/coventry.png',
        },
        {
          alt: {
            en: 'florida blue insurance',
            es: 'florida blue seguro',
          },
          logo: '/static/images/logos/fblue.png',
        },
        {
          alt: {
            en: 'humana insurance',
            es: 'humana seguro',
          },
          logo: '/static/images/logos/humana.png',
        },
        {
          alt: {
            en: 'molina insurance',
            es: 'molina seguro',
          },
          logo: '/static/images/logos/molina.png',
        },
        {
          alt: {
            en: 'national general insurance',
            es: 'national general seguro',
          },
          logo: '/static/images/logos/ng.png',
        },
      ],
    },
    section_1: {
      cta: {
        en: 'start your quote',
        es: 'consulta a un agente',
      },
      items: [
        {
          image: 'https://freerangestock.com/sample/118881/mountain-adventure-.jpg',
        },
        {
          image: 'https://freerangestock.com/sample/71354/the-urban-network--a-city-and-its-human-and-electronic-connecti.jpg',
        },
      ],
      label: {
        en: 'your zip code',
        es: 'tú código postal',
      },
      placeholder_select: {
        en: 'health',
        es: 'salud',
      },
      placeholder_zipcode: {
        en: '00232',
        es: '00233',
      },
      select: {
        en: 'choose your insurance type',
        es: 'escoge tu seguro',
      },
      select_options: [
        {
          label: {
            en: 'select a product',
            es: 'selecciona un producto',
          },
          value: '',
        },
        {
          label: {
            en: 'health en',
            es: 'health',
          },
          value: 'health',
        },
        {
          label: {
            en: 'health en',
            es: 'health',
          },
          value: 'health',
        },
        {
          label: {
            en: 'dental en',
            es: 'dental',
          },
          value: 'dental',
        },
      ],
      subtitle: {
        en: '<span>we have the best plan for your health care needs and budget. <br/>get a free online quote for affordable health insurance</span>',
        es: '<span>health care finder. <br/>best affordable health  insurance in your area.</span>',
      },
      title: {
        en: '<span>you are less than 1 minute away </br> from an health insurance quote.</span>',
        es: '<span>usted esta a menos de 1 minuto de </br>encontar su mejor seguro de salud. </span>',
      },
    },
    section_2: {
      body: {
        en: 'with over 30 years of experience, we have helped tens of thousands of people get the right coverage to meet their needs. simply click the below button to get a no obligation quote.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      items: [
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          svg: '',
          title: {
            en: '1. your insurance type.',
            es: '1. elige seguro',
          },
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          svg: '',
          title: {
            en: '2. set your contact information.',
            es: '2. proveé tu información',
          },
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a free quote now',
            es: 'obtener asistencia ahora',
          },
          svg: '',
          title: {
            en: '3. get quick and free assistance',
            es: '3. obtén asistencia rápida y gratuita',
          },
        },
      ],
      subtitle: {
        en: 'free special enrollment',
        es: 'de manera fácil y gratuita.',
      },
      svg: '/static/svg/hub.svg',
      title: {
        en: 'quickly find insurance assitance',
        es: 'el mejor seguro de salud',
      },
    },
    section_3: {
      body: {
        en: 'special enrollment: even though open enrollment is closed, you may still be able to get a health plan if you had a certain life changing event. continue to shop and your eligibility will be determined when you complete your marketplace application. if you have questions at any point, please feel free to chat or call us.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      items: [
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'auto hub',
            es: 'conóce auto',
          },
          ico: 'cloud-download',
          title: {
            en: 'auto insurance',
            es: 'seguro automóvil',
          },
          type: 'auto',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'auto hub',
            es: 'conóce auto',
          },
          ico: 'cloud-download',
          title: {
            en: 'auto insurance',
            es: 'seguro automóvil',
          },
          type: 'auto',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'auto hub',
            es: 'conóce auto',
          },
          ico: 'cloud-download',
          title: {
            en: 'auto insurance',
            es: 'seguro automóvil',
          },
          type: 'auto',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'auto hub',
            es: 'conóce auto',
          },
          ico: 'cloud-download',
          title: {
            en: 'auto insurance',
            es: 'seguro automóvil',
          },
          type: 'auto',
        },
      ],
      svg: '/static/svg/hub.svg',
      title: {
        en: 'we offer special enrollment',
        es: 'ofrecemos asistencia especializada',
      },
    },
    section_4: {
      body: {
        en: 'special enrollment: even though open enrollment is closed, you may still be able to get a health plan if you had a certain life changing event. continue to shop and your eligibility will be determined when you complete your marketplace application. if you have questions at any point, please feel free to chat or call us.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
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
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
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
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
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
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
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
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
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
  quote: {
    section_1: {
      back: {
        en: '< homepage',
        es: '< pagina principal',
      },
      forms,
    },
  },
};

export default function VerbiageSchema (id) {
  return LangProxy(Verbiage, id);
}
