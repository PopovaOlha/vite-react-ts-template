'use client';

import React from 'react';
import { DetailsClientProps } from '../../types/interfaces';
import styles from '../../styles/[id].module.css';
import { useTheme } from '../../context/ThemeContext';
import Image from 'next/image';

const DetailsClient: React.FC<DetailsClientProps> = ({ character }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.details} ${styles[theme]}`}>
      <button
        className={styles.closeButton}
        onClick={() => window.history.back()}
      >
        Close
      </button>
      <h2>{character.name}</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <Image
            className={styles.image}
            src={character.image}
            alt={character.name}
            width={500}
            height={500}
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

export default DetailsClient;
