import * as React from 'react';
import styles from './Card.module.css';
import { CardProps } from '../../types/interfaces';

interface CardComponentProps extends CardProps {
  onClick: () => void;
}

const Card: React.FC<CardComponentProps> = ({
  name,
  description,
  image,
  age,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
};

export default Card;
