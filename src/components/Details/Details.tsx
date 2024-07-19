import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCharacterDetailsQuery } from '../../slices/searchApiSlices';
import styles from './Details.module.css';
import Loader from '../../components/Loader/Loader';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: details, isLoading } = useGetCharacterDetailsQuery(id || '');

  const navigate = useNavigate();

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
      <div className={styles.container}>
        <div className={styles.box}>
          <img
            src={details.image}
            alt={details.name}
            className={styles.image}
          />
        </div>
        <div className={styles.description}>
          <p>
            <b>Birth Year:</b> {details.description}
          </p>
          <p>
            <b>Height:</b> {details.height}
          </p>
          <p>
            <b>Weight:</b> {details.mass}
          </p>
          <p>
            <b>Gender:</b> {details.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
