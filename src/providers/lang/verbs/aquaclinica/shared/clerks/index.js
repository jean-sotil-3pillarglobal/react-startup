import {
  constants,
} from './../../../../../config';

// constants
const {
  CLERK_1,
  CLERK_2,
  CLERK_3,
  CLERK_4,
  CLERK_5,
  CLERK_6,
} = constants;

const Clerks = [
  {
    description: {
      en: `
              Terapeuta Físico de la Universidad Santa Paula
        Dedicado Exclusivamente a la Fisioestetica desde el año 2012
        Master en Administración de Servicios de Salud Sostenibles UNED
        Generente y Administrador de Clínica Aqua.
      `,
      es: `
              Terapeuta Físico de la Universidad Santa Paula
        Dedicado Exclusivamente a la Fisioestetica desde el año 2012
        Master en Administración de Servicios de Salud Sostenibles UNED
        Generente y Administrador de Clínica Aqua.
      `,
    },
    id: CLERK_1,
    image: './src/static/images/clerks/_MG_6998.jpg',
    label: {
      en: 'Generente y Administrador de Clínica Aqua.',
      es: 'Generente y Administrador de Clínica Aqua.',
    },
    less: {
      en: 'Cerrar',
      es: 'Cerrar',
    },
    more: {
      en: 'Conocer más',
      es: 'Conocer más',
    },
    name: {
      en: 'Dr. Luis Roberto Elizondo',
      es: 'Dr. Luis Roberto Elizondo',
    },
  },
  {
    description: {
      en: `
        El Dr.Tabush , es egresado como Médico y Cirujano de la Universidad de Ciencias Médicas UCIMED, donde recibió la distinción Cum Laude Probatus. Graduado en la Especialidad de Dermatología de uno de los Centros Hospitalarios más prestigiosos de Latinoamérica: El Instituto de Dermatología y Cirugía de piel INDERMA, ubicado en la Ciudad de Guatemala, posee 5 sedes a lo largo del país y se dedica exclusivamente a la Dermatología Médica y Quirúrgica.
        Además se destacó por ser Jefe de Residentes durante el curso de todo su posgrado. Y obtuvo el Premio August C. Stiefel de la Academia Española de Dermatología y Venereología (AEDV). 2002.
        El Dr. Tabush es pionero nacional y centroamericano en el uso de distintas técnicas de láser en Dermatología, y ha sido miembro por más de 10 años de la ASLMS (American Society for Laser Medicine and Surgery).

        Gracias a su reconocida experiencia y conocimiento, es regularmente invitado como conferencista en congresos de dermatología tanto en territorio nacional como internacional.
      `,
      es: `
        El Dr.Tabush , es egresado como Médico y Cirujano de la Universidad de Ciencias Médicas UCIMED, donde recibió la distinción Cum Laude Probatus. Graduado en la Especialidad de Dermatología de uno de los Centros Hospitalarios más prestigiosos de Latinoamérica: El Instituto de Dermatología y Cirugía de piel INDERMA, ubicado en la Ciudad de Guatemala, posee 5 sedes a lo largo del país y se dedica exclusivamente a la Dermatología Médica y Quirúrgica.
        Además se destacó por ser Jefe de Residentes durante el curso de todo su posgrado. Y obtuvo el Premio August C. Stiefel de la Academia Española de Dermatología y Venereología (AEDV). 2002.
        El Dr. Tabush es pionero nacional y centroamericano en el uso de distintas técnicas de láser en Dermatología, y ha sido miembro por más de 10 años de la ASLMS (American Society for Laser Medicine and Surgery).
        <br /><br />
        Gracias a su reconocida experiencia y conocimiento, es regularmente invitado como conferencista en congresos de dermatología tanto en territorio nacional como internacional.
      `,
    },
    id: CLERK_2,
    image: './src/static/images/clerks/IMG-1400.jpg',
    label: {
      en: 'Médico Cirujano Dermatólogo',
      es: 'Médico Cirujano Dermatólogo',
    },
    less: {
      en: 'Cerrar',
      es: 'Cerrar',
    },
    more: {
      en: 'Conocer más',
      es: 'Conocer más',
    },
    name: {
      en: 'Dr Jose Antonio Tabush Clare',
      es: 'Dr Jose Antonio Tabush Clare',
    },
    size_md: 6,
    size_sm: 6,
  },
  {
    description: {
      en: `
        El Dr. Soto es un médico dermatólogo certificado por el Colegio de Médicos y Cirujanos de Costa Rica. Realizó sus estudios en medicina general en la Universidad de Ciencias Médicas (UCIMED) y posteriormente obtuvo su título de especialista en dermatología tras completar el programa de residencia de la Universidad de Costa Rica. Durante sus 4 años de formación como dermatólogo, el Dr. Soto se capacitó en los principales hospitales públicos de Costa Rica y posteriormente laboró en el Hospital Escalante Pradilla de Pérez Zeledón como parte de su servicio social. El Dr. Soto es miembro de la Academia Europea de Dermatología y Venereología (EADV), así como de la Asociación Americana de Láser en Medicina y Cirugía (ASLMS). El Dr. Soto ha participado en múltiples congresos internacionales y capacitaciones en temas de dermatología clínica y estética. En el año 2016 la revista médica PIEL (España) publicó un articulo cientifico suyo y como reconocimiento internacional el Dr. Soto ganó el premio a mejor caso de la EADV en la Universidad de Bologna, Italia.
      `,
      es: `
        El Dr. Soto es un médico dermatólogo certificado por el Colegio de Médicos y Cirujanos de Costa Rica. Realizó sus estudios en medicina general en la Universidad de Ciencias Médicas (UCIMED) y posteriormente obtuvo su título de especialista en dermatología tras completar el programa de residencia de la Universidad de Costa Rica. Durante sus 4 años de formación como dermatólogo, el Dr. Soto se capacitó en los principales hospitales públicos de Costa Rica y posteriormente laboró en el Hospital Escalante Pradilla de Pérez Zeledón como parte de su servicio social. El Dr. Soto es miembro de la Academia Europea de Dermatología y Venereología (EADV), así como de la Asociación Americana de Láser en Medicina y Cirugía (ASLMS). El Dr. Soto ha participado en múltiples congresos internacionales y capacitaciones en temas de dermatología clínica y estética. En el año 2016 la revista médica PIEL (España) publicó un articulo cientifico suyo y como reconocimiento internacional el Dr. Soto ganó el premio a mejor caso de la EADV en la Universidad de Bologna, Italia.
      `,
    },
    id: CLERK_3,
    image: './src/static/images/IMG-1400.jpg',
    label: {
      en: 'Médico Cirujano Dermatólogo',
      es: 'Médico Cirujano Dermatólogo',
    },
    less: {
      en: 'Cerrar',
      es: 'Cerrar',
    },
    more: {
      en: 'Conocer más',
      es: 'Conocer más',
    },
    name: {
      en: 'Dr. Arturo Soto Mora',
      es: 'Dr. Arturo Soto Mora',
    },
    size_md: 6,
    size_sm: 6,
  },
  {
    description: {
      en: `
        Realizó sus estudios de medicina general en la Universidad Latina de Costa Rica en el 2010; posteriormente concluyó la especialidad en Homeopatía en Guadalajara, México en el 2015. Asistiendo durante todos los años de formación a diferentes congresos y capacitaciones en ambos países.
        <br /><br />
        Durante los años de formación de medicina y homeopatía realizó capacitaciones y cursos en áreas como Terapia reiki (nivel 2), Auriculoterapia, Mesoterapia.
        <br /><br />
        Estuvo a cargo de la Clinica de Uñas; y además ha recibido capacitaciones en laser Fotona, Thermi y Ultherapy.
      `,
      es: `
        Realizó sus estudios de medicina general en la Universidad Latina de Costa Rica en el 2010; posteriormente concluyó la especialidad en Homeopatía en Guadalajara, México en el 2015. Asistiendo durante todos los años de formación a diferentes congresos y capacitaciones en ambos países.
        <br /><br />
        Durante los años de formación de medicina y homeopatía realizó capacitaciones y cursos en áreas como Terapia reiki (nivel 2), Auriculoterapia, Mesoterapia.
        <br /><br />
        Estuvo a cargo de la Clinica de Uñas; y además ha recibido capacitaciones en laser Fotona, Thermi y Ultherapy.
      `,
    },
    id: CLERK_4,
    image: './src/static/images/IMG-1400.jpg',
    label: {
      en: 'Médica Cirujana Dermatóloga',
      es: 'Médica Cirujana Dermatóloga',
    },
    less: {
      en: 'Cerrar',
      es: 'Cerrar',
    },
    more: {
      en: 'Conocer más',
      es: 'Conocer más',
    },
    name: {
      en: 'Dra. Diana Ulate Ovares',
      es: 'Dra. Diana Ulate Ovares',
    },
    size_md: 6,
    size_sm: 6,
  },
  {
    description: {
      en: `
        Realizo sus estudios en la Universidad Hispanoamericana.
        <br /><br />
        Enfocada y comprometida en ayudar a cambiar estilos de vida por medio de la alimentacion saludable, ajustadas a nuestra realidad.
      `,
      es: `
        Realizo sus estudios en la Universidad Hispanoamericana.
        <br /><br />
        Enfocada y comprometida en ayudar a cambiar estilos de vida por medio de la alimentacion saludable, ajustadas a nuestra realidad.
      `,
    },
    id: CLERK_5,
    image: './src/static/images/IMG-1400.jpg',
    label: {
      en: 'Nutricionista',
      es: 'Nutricionista',
    },
    less: {
      en: 'Cerrar',
      es: 'Cerrar',
    },
    more: {
      en: 'Conocer más',
      es: 'Conocer más',
    },
    name: {
      en: 'Dra. Katherine Arias Calderon',
      es: 'Dra. Katherine Arias Calderon',
    },
    size_md: 6,
    size_sm: 6,
  },
  {
    description: {
      en: `
        Realizo sus estudios en la Universidad Latina de Costa Rica en el 2013.
      `,
      es: `
        Realizo sus estudios en la Universidad Latina de Costa Rica en el 2013.
      `,
    },
    id: CLERK_6,
    image: './src/static/images/clerks/IMG-1400.jpg',
    label: {
      en: 'Fisioterapeuta',
      es: 'Fisioterapeuta',
    },
    name: {
      en: 'Lic. Helyani Lopez Solano',
      es: 'Lic. Helyani Lopez Solano',
    },
    size_md: 6,
    size_sm: 6,
  },
];

export default Clerks;
