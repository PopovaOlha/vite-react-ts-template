import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APICharacter, Character } from '../types/interfaces';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    searchCharacters: builder.query<
      Character[],
      { searchTerm: string; page: number }
    >({
      query: ({ searchTerm, page }) =>
        searchTerm ? `people/?search=${searchTerm}` : `people/?page=${page}`,
      transformResponse: (response: { results: APICharacter[] }) =>
        response.results.map((item) => {
          const idMatch = item.url.match(/\/([0-9]*)\/$/);
          const id = idMatch ? idMatch[1] : 'unknown';
          return {
            id: id,
            name: item.name,
            description: item.birth_year,
            image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
            age: item.birth_year,
            height: item.height,
            mass: item.mass,
            gender: item.gender,
            films: item.films,
          };
        }),
    }),
    getCharacterDetails: builder.query<Character, string>({
      query: (id) => `people/${id}/`,
      transformResponse: (item: APICharacter) => {
        const idMatch = item.url.match(/\/([0-9]*)\/$/);
        const id = idMatch ? idMatch[1] : 'unknown';
        return {
          id: id,
          name: item.name,
          description: item.birth_year,
          image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
          age: item.birth_year,
          height: item.height,
          mass: item.mass,
          gender: item.gender,
          films: item.films,
        };
      },
    }),
  }),
});

export const { useSearchCharactersQuery, useGetCharacterDetailsQuery } =
  searchApi;
