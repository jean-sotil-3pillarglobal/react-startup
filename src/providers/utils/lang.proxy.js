const LangProxy = (verbiage, id) => {
  let copy = '';

  if (id && id.split) {
    const context = id.split('.');
    const root = context[0];
    const type = context[1];
    const attr = context[2].split('-');

    // node is an array
    if (attr.length > 1) {
      const slot = parseInt(attr[1], 10);
      copy = verbiage[root][type][attr[0]][slot][attr[2]];
    } else if (copy === '') {
      copy = (verbiage[root]) ? verbiage[root][type][attr[0]] : '';
    }
  } else if (id instanceof Object) {
    // value provided
    copy = id;
  }

  return copy;
};

export default LangProxy;
