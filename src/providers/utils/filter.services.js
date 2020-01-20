export function FindServiceCategoryByPath (type, categories, language) {
  return categories.find(category => category.url[language].includes(type));
}

export function FindServiceByPath (url, services, language) {
  console.log(services);
  return services.find(service => service.url[language].includes(url));
}
