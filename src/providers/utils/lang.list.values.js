const LangListValues = (verbiage, list, key) => {
  return list.map(item => verbiage(item[key]));
};

export default LangListValues;
