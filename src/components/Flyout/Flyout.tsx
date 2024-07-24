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
  const downloadLinkRef = React.useRef<HTMLAnchorElement>(null);

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

    if (downloadLinkRef.current) {
      downloadLinkRef.current.setAttribute('href', encodedUri);
      downloadLinkRef.current.setAttribute(
        'download',
        `${selectedItems.length}_items.csv`,
      );
      downloadLinkRef.current.click();
    }
  };

  return (
    <div
      className={`${styles.flyout} ${theme === 'dark' ? styles.dark : styles.light}`}
    >
      <p>{selectedItems.length} items are selected</p>
      <button onClick={handleUnselectAll}>Unselect all</button>
      <button onClick={handleDownload}>Download</button>
      <a
        ref={downloadLinkRef}
        style={{ display: 'none' }}
        data-testid="download-link"
      />
    </div>
  );
};

export default Flyout;
