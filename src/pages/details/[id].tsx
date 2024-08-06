import * as React from 'react';
import { useRouter } from 'next/router';
import { DetailsProps } from '../../types/interfaces';
import { getServerSideProps } from '../../utils/fetchCharacterData';
import styles from '../../styles/[id].module.css';
import { useTheme } from '../../context/ThemeContext';
import Image from 'next/image';

const Details: React.FC<DetailsProps> = ({ character }) => {
  const router = useRouter();
  const { theme } = useTheme();

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className={`${styles.details} ${styles[theme]}`}>
      <button className={styles.closeButton} onClick={() => router.back()}>
        Close
      </button>
      <h2>{character.name}</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <Image
            className={styles.image}
            src={character.image}
            alt={character.name}
            priority={true}
          />
        </div>
        <div className={styles.description}>
          <p>
            <b>Birth Year:</b> {character.description}
          </p>
          <p>
            <b>Height:</b> {character.height}
          </p>
          <p>
            <b>Mass:</b> {character.mass}
          </p>
          <p>
            <b>Gender:</b> {character.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
export { getServerSideProps };
