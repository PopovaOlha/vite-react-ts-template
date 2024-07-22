import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setSelectedItems } from '../../slices/selectedSlice';
import styles from './Flyout.module.css';
import { useTheme } from '../../context/ThemeContext';

const Flyout: React.FC = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selected.selectedItems,
  );
  const { theme } = useTheme();

  if (selectedItems.length === 0) return null;

  const handleUnselectAll = () => {
    dispatch(setSelectedItems([]));
  };

  const handleDownload = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      selectedItems
        .map(
          (item) =>
            `${item.name},${item.description},${item.image},${item.age},${item.height},${item.mass},${item.gender},${item.films.join(' | ')}`,
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${selectedItems.length}_items.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`${styles.flyout} ${theme === 'dark' ? styles.dark : styles.light}`}
    >
      <p>{selectedItems.length} items are selected</p>
      <button onClick={handleUnselectAll}>Unselect all</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default Flyout;
