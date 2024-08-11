'use client';

import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const [csvUri, setCsvUri] = useState<string | null>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

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

    setCsvUri(encodeURI(csvContent));
  };

  useEffect(() => {
    if (csvUri && downloadLinkRef.current) {
      downloadLinkRef.current.click();
      setCsvUri(null);
    }
  }, [csvUri]);

  if (selectedItems.length === 0) return null;

  return (
    <div
      className={`${styles.flyout} ${
        theme === 'dark' ? styles.dark : styles.light
      }`}
    >
      <button onClick={handleUnselectAll}>Unselect all</button>
      <p>{selectedItems.length} items are selected</p>
      <button onClick={handleDownload}>Download</button>
      {csvUri && (
        <a
          ref={downloadLinkRef}
          href={csvUri}
          download={`${selectedItems.length}_items.csv`}
          style={{ display: 'none' }}
        >
          Download Link
        </a>
      )}
    </div>
  );
};

export default Flyout;
