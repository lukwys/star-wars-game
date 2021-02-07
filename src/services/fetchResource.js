export const fetchResource  = async (resourceType) => {
  const response = await fetch(`https://swapi.dev/api/${resourceType}/`);
  const data = await response.json();

  return data.results;
};
