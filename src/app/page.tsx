import MainServer from '../components/Main/MainServer';

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const params = {
    searchTerm: searchParams.searchTerm || '',
    page: searchParams.page || '1',
  };

  return <MainServer searchParams={params} />;
};

export default Page;
