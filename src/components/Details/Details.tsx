import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCharacterDetailsQuery } from '../../slices/searchApiSlices';
import { useDispatch } from 'react-redux';
import { setCharacterDetails } from '../../slices/searchSlice';
import { useTheme } from '../../context/ThemeContext';
import styles from './Details.module.css';
import Loader from '../../components/Loader/Loader';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: details, isLoading } = useGetCharacterDetailsQuery(id || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();

  React.useEffect(() => {
    if (details) {
      dispatch(setCharacterDetails(details));
    }
  }, [details, dispatch]);

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
    <div
      className={`${styles.details} ${theme === 'dark' ? styles.dark : styles.light}`}
    >
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
