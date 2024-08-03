import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { APICharacter, Character, DetailsProps } from '../types/interfaces';

export const getServerSideProps: GetServerSideProps<DetailsProps> = async (
  context,
) => {
  const result = await fetchCharacterData(context);

  if ('notFound' in result && result.notFound) {
    return { notFound: true };
  }

  if ('props' in result && result.props) {
    const { character } = result.props;
    if (character) {
      return {
        props: {
          character,
        },
      };
    }
  }

  return { notFound: true };
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

  const character: Character = {
    id: id as string,
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
    props: {
      character,
    },
  };
};
