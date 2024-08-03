import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import {
  APICharacter,
  Character,
  defaultCharacter,
  MainProps,
} from '../types/interfaces';

export const getServerSideProps: GetServerSideProps<MainProps> = async (
  context,
) => {
  const data = await fetchData(context);

  return { props: data };
};

export const fetchData = async (context: GetServerSidePropsContext) => {
  const { searchTerm = '', page = 1 } = context.query;

  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`,
  );
  const data = await response.json();
  const searchResults: Character[] = data.results.map((item: APICharacter) => {
    const idMatch = item.url.match(/\/([0-9]*)\/$/);
    const id = idMatch ? idMatch[1] : 'unknown';
    return {
      id,
      name: item.name,
      description: item.birth_year,
      image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
      age: item.birth_year,
      height: item.height,
      mass: item.mass,
      gender: item.gender,
      films: item.films,
    };
  });

  return {
    searchResults,
    searchTerm: String(searchTerm),
    currentPage: Number(page),
    totalPages: Math.ceil(data.count / 10),
    character: defaultCharacter,
  };
};
