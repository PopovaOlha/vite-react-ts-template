'use client';

import * as React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectItem } from '../../slices/selectedSlice';
import { RootState } from '../../store';
import styles from './Card.module.css';
import { Character } from '../../types/interfaces';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  character: Character;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ character, onClick }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const selectedItems = useSelector(
    (state: RootState) => state.selected.selectedItems,
  );

  const isSelected = selectedItems.some((item) => item.id === character.id);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    dispatch(toggleSelectItem(character));
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLInputElement).type === 'checkbox') {
      return;
    }
    onClick();
  };

  return (
    <div
      data-testid="card"
      className={`${styles.card} ${theme === 'dark' ? styles.dark : styles.light}`}
      onClick={handleCardClick}
    >
      <Image
        src={character.image}
        alt={character.name}
        className={styles.cardImage}
        width={200}
        height={300}
      />
      <div className={styles.cardContent}>
        <h3>{character.name}</h3>
        <p>{character.description}</p>
        <p>
          <strong>Age:</strong> {character.age}
        </p>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
        <label className={styles.checkboxLabel}>Add to Favorites</label>
      </div>
    </div>
  );
};

export default Card;
