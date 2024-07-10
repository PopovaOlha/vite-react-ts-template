import { APICharacter, Character } from '../types/interfaces';

const fetchSearchResults = async (searchTerm: string): Promise<Character[]> => {
  const apiUrl = searchTerm
    ? `https://swapi.dev/api/people/?search=${searchTerm}`
    : 'https://swapi.dev/api/people/?page=1';

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  const results = data.results.map((item: APICharacter) => {
    const idMatch = item.url.match(/\/([0-9]*)\/$/);
    const id = idMatch ? idMatch[1] : 'unknown';
    return {
      name: item.name,
      description: item.birth_year,
      image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
      age: item.birth_year,
    };
  });

  return results;
};

export default fetchSearchResults;
