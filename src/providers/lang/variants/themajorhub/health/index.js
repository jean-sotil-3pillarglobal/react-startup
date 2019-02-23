import LangProxy from '../../../../utils/lang.proxy';

const Verbiage = {
  components: {
    carousel: {},
    contact: {},
    content: {
      body: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
      },
      items: [
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 1',
            es: 'get a quote 1',
          },
          ico: 'alarm',
          title: {
            en: 'item 1',
            es: 'item 1',
          },
          type: 'auto',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 2',
            es: 'get a quote 2',
          },
          ico: 'restore',
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
            es: 'get a quote 3',
          },
          ico: '3d_rotation',
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
            es: 'get a quote 4',
          },
          ico: 'delete',
          title: {
            en: 'item 4',
            es: 'item 4',
          },
          type: 'boat',
        },
      ],
      title: {
        en: 'blog',
        es: 'blog',
      },
    },
    drawer: {},
    features: {
      body: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
      },
      items: [
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 1',
            es: 'get a quote 1',
          },
          ico: 'alarm',
          title: {
            en: 'item 1',
            es: 'item 1',
          },
          type: 'auto',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 2',
            es: 'get a quote 2',
          },
          ico: 'restore',
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
            es: 'get a quote 3',
          },
          ico: '3d_rotation',
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
            es: 'get a quote 4',
          },
          ico: 'delete',
          title: {
            en: 'item 4',
            es: 'item 4',
          },
          type: 'boat',
        },
      ],
      title: {
        en: 'Need Health <br/>Insurance?',
        es: 'Tenemos Lo <br/>Que Necesitas',
      },
    },
    header: {
      label: {
        en: 'The <br/>MajorHub',
        es: 'The <br/>MajorHub',
      },
      nav1: {
        en: 'link 1',
        es: 'enlace 1',
      },
      nav2: {
        en: 'link 2',
        es: 'enlace 2',
      },
      nav3: {
        en: 'link 3',
        es: 'enlace 3',
      },
      nav4: {
        en: 'learn more',
        es: 'aprendé más',
      },
    },
    hero: {
      cta: {
        en: 'start your quote',
        es: 'Consulta a un agente',
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
        en: 'Your Zip Code',
        es: 'Tú Código de Area',
      },
      subtitle: {
        en: '<span>Healthcare Finder. <br/>Best Affordable Health Insurance in Your Area.</span>',
        es: '<span>Healthcare Finder. <br/>Best Affordable Health Insurance in Your Area.</span>',
      },
      title: {
        en: '<span>Welcome [FIRST NAME]</span>',
        es: '<span>Bienvenido [FIRST NAME]</span>',
      },
    },
    modal: {},
    popup: {},
    testimonial: {},
  },
};

export default function VerbiageSchema (id) {
  return LangProxy(Verbiage, id);
}
