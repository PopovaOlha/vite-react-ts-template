import { APICharacter, Character } from '../types/interfaces';
import { PEOPLE_API_URL, IMAGE_BASE_URL } from './variables';

export const performSearch = (searchTerm: string): Promise<Character[]> => {
  let apiUrl = `${PEOPLE_API_URL}/?page=1`;
  if (searchTerm) {
    apiUrl = `${PEOPLE_API_URL}/?search=${searchTerm}`;
  }

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((item: APICharacter) => {
        const idMatch = item.url.match(/\/([0-9]*)\/$/);
        const id = idMatch ? idMatch[1] : 'unknown';
        return {
          name: item.name,
          description: item.birth_year,
          image: `${IMAGE_BASE_URL}/${id}.jpg`,
          age: item.birth_year,
        };
      });
    });
};
