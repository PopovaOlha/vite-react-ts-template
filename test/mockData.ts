import { Character } from '../src/types/interfaces';

export const mockResults: Character[] = [
  {
    id: '1',
    name: 'Alice',
    description: 'description',
    image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
    age: '11',
    height: '101',
    mass: '20',
    gender: 'female',
    films: ['https://swapi.dev/api/films/1/'],
  },
  {
    id: '2',
    name: 'Character 2',
    description: 'Description 2',
    image: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
    age: '40',
    height: '180',
    mass: '75',
    gender: 'male',
    films: ['https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/'],
  },
];

export const mockCharacter = {
  id: '1',
  name: 'Alice',
  description: 'description',
  image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
  age: '11',
  height: '101',
  mass: '20',
  gender: 'female',
  films: ['https://swapi.dev/api/films/1/'],
};

export const fetchSearchResults = jest.fn(() => Promise.resolve(mockResults));
export const getCachedCharacterDetails = jest.fn((id: string) =>
  mockResults.find((character) => character.id === id),
);
