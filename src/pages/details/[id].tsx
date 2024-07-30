import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetCharacterDetailsQuery } from '../../slices/searchApiSlices';
import { useDispatch } from 'react-redux';
import { setCharacterDetails } from '../../slices/searchSlice';
import { useTheme } from '../../context/ThemeContext';
import styles from '../../styles/details.module.css';
import Loader from '../../components/Loader/Loader';

const Details: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: details, isLoading } = useGetCharacterDetailsQuery(
    id as string,
  );
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    if (details) {
      dispatch(setCharacterDetails(details));
    }
  }, [details, dispatch]);

  const handleClose = () => {
    router.push('/');
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
