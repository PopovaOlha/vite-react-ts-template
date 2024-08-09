import { APICharacter, Character } from '../types/interfaces';

export const fetchCharacterData = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data: APICharacter = await response.json();

  if (!data) {
    return { notFound: true };
  }

  const character: Character = {
    id,
    name: data.name,
    description: data.birth_year,
    image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
    age: data.birth_year,
    height: data.height,
    mass: data.mass,
    gender: data.gender,
    films: data.films,
  };

  return {
    character,
  };
};
