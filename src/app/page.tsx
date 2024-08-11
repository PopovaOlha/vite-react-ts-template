import MainServer from '../components/Main/MainServer';
import LayoutClient from '../components/Layout/LayoutClient';

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const params = {
    searchTerm: searchParams.searchTerm || '',
    page: searchParams.page || '1',
  };

  return (
    <LayoutClient>
      <MainServer searchParams={params} />;
    </LayoutClient>
  );
};

export default Page;
