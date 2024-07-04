import { Component } from 'react';
import styles from './Card.module.css';

interface Props {
  name: string;
  description: string;
  image: string;
  age: string;
}

class Card extends Component<Props> {
  render() {
    const { name, description, image, age } = this.props;
    return (
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p><strong>Age:</strong> {age}</p>
        </div>
      </div>
    );
  }
}

export default Card;