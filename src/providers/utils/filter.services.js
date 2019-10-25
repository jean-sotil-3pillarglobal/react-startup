export function FindServiceByPath (path, services, language) {
  return services.find(service => service.url[language] === path);
}
