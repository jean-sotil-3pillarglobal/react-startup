export function FindServiceCategoryByPath (path, services, language) {
  return services.find(service => service.url[language] === path);
}
