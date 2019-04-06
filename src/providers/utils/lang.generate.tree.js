import LangGenerateId from './lang.generate.id';

export default function LangGenerateTree (nodeTree, attrs) {
  const obj = {};

  attrs.forEach((attr) => {
    let steps = attr;
    if (steps.split('-').length > 1) {
      steps = attr.split('-');

      if (steps.length === 3) {
        const iterator = parseInt(steps[1], 10);

        if (!obj[steps[0]]) {
          obj[steps[0]] = [];
        }

        // obj proxy
        const container = obj[steps[0]];
        for (let i = 0; i < iterator; i += 1) {
          // create node
          if (!container[i]) {
            container[i] = {};
          }

          container[i][steps[2]] = LangGenerateId(nodeTree, `${steps[0]}-${i}-${steps[2]}`);
        }
      }
    } else {
      obj[attr] = LangGenerateId(nodeTree, attr);
    }
  });

  return obj;
}
