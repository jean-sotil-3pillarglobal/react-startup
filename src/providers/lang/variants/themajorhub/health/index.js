import LangProxy from '../../../../utils/lang.proxy';

const Verbiage = {
  components: {
    carousel: {},
    contact: {},
    content: {},
    drawer: {},
    features: {},
    header: {
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
      cta1: {
        en: 'hero cta-en',
        es: 'hero cta-es',
      },
      subtitle: {
        en: 'hero subtitle',
        es: 'hero subtitulo',
      },
      title: {
        en: 'hero title',
        es: 'hero titulo',
      },
    },
    modal: {},
    popup: {},
    testimonial: {},
  },
};

const VerbiageSchema = {
  'components.header.nav1': LangProxy(Verbiage, 'components.header.nav1'),
  'components.header.nav2': LangProxy(Verbiage, 'components.header.nav2'),
  'components.header.nav3': LangProxy(Verbiage, 'components.header.nav3'),
  'components.header.nav4': LangProxy(Verbiage, 'components.header.nav4'),
  'components.hero.cta1': LangProxy(Verbiage, 'components.hero.cta1'),
  'components.hero.subtitle': LangProxy(Verbiage, 'components.hero.subtitle'),
  'components.hero.title': LangProxy(Verbiage, 'components.hero.title'),
};

export default VerbiageSchema;
