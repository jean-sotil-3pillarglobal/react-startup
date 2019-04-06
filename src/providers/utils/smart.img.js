
export default function smartImg (device, src) {
  let value = `d-${src}`;

  if (device === 'mobile') {
    value = `m-${src}`;
  }

  return `/resources/images/${value}`;
}
