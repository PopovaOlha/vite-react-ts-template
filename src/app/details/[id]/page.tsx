import { fetchCharacterData } from '../../../utils/fetchCharacterData';
import DetailsClient from '../../../components/Details/Details';
import { CardProps } from 'src/types/interfaces';

interface DetailsServerProps extends CardProps {
  id: string;
}

const DetailsServer = async ({ id }: DetailsServerProps) => {
  const { character } = await fetchCharacterData(id);

  if (!character) {
    return <div>Character not found</div>;
  }

  return <DetailsClient character={character} id={id} />;
};

export default DetailsServer;
