export const CreateUrlOnePath = (path) => {
  return (id, language) => {
    return `/${path[language]}/${id}`;
  };
};
