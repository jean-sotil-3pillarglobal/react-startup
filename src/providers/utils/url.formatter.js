export const CreateUrlOnePath = (path) => {
  return (id, language) => {
    return `/${path[language]}/${id}`;
  };
};

export const CreateUrlCategory = (language, category) => {
  return `/${language}${category.url[language]}`;
};

export const CreateUrlCategoryDetails = (language, category, service) => {
  return `/${language}${category.url[language]}/${service.url[language]}`;
};
