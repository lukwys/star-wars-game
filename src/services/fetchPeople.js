const baseUrl = 'https://swapi.dev/api/people/';

export const fetchPeople  = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
};
