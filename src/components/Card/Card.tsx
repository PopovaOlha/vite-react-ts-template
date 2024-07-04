import { Component } from 'react';
import styles from './Card.module.css';
import { CardProps } from '../../types/interfaces';

class Card extends Component<CardProps> {
  render() {
    const { name, description, image, age } = this.props;
    return (
      <div className={styles.card}>
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
  }
}

export default Card;
