import { fetchCharacterData } from '../../../utils/fetchCharacterData';
import DetailsClient from '../../../components/Details/Details';
import { DetailsServerProps } from 'src/types/interfaces';

type CompatibleProps<T> = T extends { id: infer U } ? { id: U } : never;

const DetailsServer = async ({ id }: CompatibleProps<DetailsServerProps>) => {
  const { character } = await fetchCharacterData(id);

  if (!character) {
    return <div>Character not found</div>;
  }

  return <DetailsClient character={character} id={id} />;
};

export default DetailsServer;
