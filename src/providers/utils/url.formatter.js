export const CreateUrlOnePath = (path) => {
  return (id, language) => {
    return `/${path[language]}/${id}`;
  };
};

export const CreateUrlCategoryDetails = (language, category, item) => {
  return `/${language}${category.url[language]}/${item.url[language]}`;
};
