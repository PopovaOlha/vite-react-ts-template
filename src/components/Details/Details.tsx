import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Details.module.css';
import Loader from '../../components/Loader/Loader';
import { Character } from '../../types/interfaces';
import fetchSearchResults, { getCachedCharacterDetails } from '../../api/api';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      if (!id) return;

      setIsLoading(true);

      const cachedCharacter = getCachedCharacterDetails(id);
      if (cachedCharacter) {
        setDetails(cachedCharacter);
        setIsLoading(false);
      } else {
        try {
          const results = await fetchSearchResults('');
          const character = results.find((result) => result.id === id) || null;
          setDetails(character);
        } catch (error) {
          console.error('Error fetching details:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getDetails();
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
