import React from 'react';
import { fetchData } from '../../utils/fetchData';
import MainClient from './MainClient';
import { MainServerProps } from 'src/types/interfaces';

const MainServer: React.FC<MainServerProps> = async ({ searchParams }) => {
  const searchTerm = searchParams.searchTerm || '';
  const page = parseInt(searchParams.page || '1', 10);
  const { searchResults, totalPages } = await fetchData(searchTerm, page);

  return (
    <MainClient
      searchTerm={searchTerm}
      page={page}
      searchResults={searchResults}
      totalPages={totalPages}
    />
  );
};

export default MainServer;
