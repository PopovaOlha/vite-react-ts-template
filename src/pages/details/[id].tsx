import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { DetailsProps } from '../../types/interfaces';
import { fetchCharacterData } from '../../utils/fetchCharacterData';
import styles from '../../styles/[id].module.css';
import { useTheme } from '../../context/ThemeContext';

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
          <img
            className={styles.image}
            src={character.image}
            alt={character.name}
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
          <p>
            <b>Films:</b>
          </p>
          <div className={styles.films}>
            <ul>
              {character.films.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default Details;
