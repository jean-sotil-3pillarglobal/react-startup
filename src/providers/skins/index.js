
// TODO: dynamic injection
import SkinAuto from './auto';
import SkinDefault from './default';
import SkinGroupBenefits from './group';
import SkinHealth from './health';

// map state to props
export default function SkinProvider (name) {
  let skin;

  switch (name) {
  case 'auto':
    skin = SkinAuto;
    break;
  case 'health':
    skin = SkinHealth;
    break;
  case 'group':
    skin = SkinGroupBenefits;
    break;
  default:
    skin = SkinDefault;
  }

  return skin;
}
