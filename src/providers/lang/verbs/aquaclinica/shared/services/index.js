import DermaClinica from './derma-clinica';
import DermaEstetica from './derma-estetica';
import Nutri from './nutri';
import SpaClinico from './spa-clinico';
import TerapiaFisica from './terapia-fisica';

const Services = [
  ...DermaClinica,
  ...DermaEstetica,
  ...Nutri,
  ...SpaClinico,
  ...TerapiaFisica,
];

export default Services;
