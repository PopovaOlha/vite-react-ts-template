import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Details.module.css';
import Loader from '../../components/Loader/Loader';
import { Character } from '../../types/interfaces';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        const characterId = data.url.match(/\/([0-9]*)\/$/)?.[1] || 'unknown';
        const character: Character = {
          id: characterId,
          name: data.name,
          description: data.birth_year,
          image: `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`,
          age: data.birth_year,
        };
        setDetails(character);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching details:', error);
        setIsLoading(false);
      });
  }, [id]);

  const handleClose = () => {
    navigate('/');
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!details) {
    return <p>Details not available</p>;
  }

  return (
    <div className={styles.details}>
      <button onClick={handleClose} className={styles.closeButton}>
        Close
      </button>
      <h2>{details.name}</h2>
      <img src={details.image} alt={details.name} className={styles.image} />
      <p>{details.description}</p>
    </div>
  );
};

export default Details;
