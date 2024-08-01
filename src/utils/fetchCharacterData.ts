import { GetServerSidePropsContext } from 'next';
import { APICharacter, Character } from '../types/interfaces';

const fetchFilmTitles = async (filmUrls: string[]): Promise<string[]> => {
  const filmRequests = filmUrls.map((url) =>
    fetch(url).then((res) => res.json()),
  );
  const films = await Promise.all(filmRequests);
  return films.map((film) => film.title);
};

export const fetchCharacterData = async (
  context: GetServerSidePropsContext,
) => {
  const { id } = context.params || {};

  if (!id) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data: APICharacter = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const filmTitles = data.films ? await fetchFilmTitles(data.films) : [];

  const character: Character = {
    id: id as string,
    name: data.name,
    description: data.birth_year,
    image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
    age: data.birth_year,
    height: data.height,
    mass: data.mass,
    gender: data.gender,
    films: filmTitles,
  };

  return {
    props: {
      character,
    },
  };
};
