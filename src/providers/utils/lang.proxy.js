const LangProxy = (verbiage, id) => {
  const context = id.split('.');
  // component -> type -> lang
  return verbiage[context[0]][context[1]][context[2]];
};

export default LangProxy;
