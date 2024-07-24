import { render, screen, fireEvent } from '@testing-library/react';
import Flyout from './Flyout';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import searchReducer from '../../slices/searchSlice';
import selectedReducer from '../../slices/selectedSlice';
import { searchApi } from '../../slices/searchApiSlices';
import { ThemeProvider } from '../../context/ThemeContext';
import { setSelectedItems } from '../../slices/selectedSlice';
import { mockResults } from '../../../test/mockData';

// Создаем mock store
const store = configureStore({
  reducer: {
    search: searchReducer,
    selected: selectedReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

describe('Flyout Component', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <Provider store={store}>
        <ThemeProvider>
          {' '}
          {/* Оборачиваем в ThemeProvider */}
          {component}
        </ThemeProvider>
      </Provider>,
    );
  };

  beforeEach(() => {
    store.dispatch(setSelectedItems(mockResults));
  });

  test('renders the correct number of selected items', () => {
    renderWithProviders(<Flyout />);
    const paragraphElement = screen.getByText(
      `${mockResults.length} items are selected`,
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  test('unselects all items when the Unselect all button is clicked', () => {
    renderWithProviders(<Flyout />);
    const unselectAllButton = screen.getByText('Unselect all');
    fireEvent.click(unselectAllButton);
    expect(store.getState().selected.selectedItems).toHaveLength(0);
  });

  test('triggers download when the Download button is clicked', () => {
    renderWithProviders(<Flyout />);
    const downloadButton = screen.getByText('Download');

    // Пытаемся получить элемент через querySelector
    const downloadLink = document.querySelector(
      'a[data-testid="download-link"]',
    ) as HTMLAnchorElement;
    expect(downloadLink).toBeInTheDocument(); // Проверяем, что элемент существует

    // Добавляем mock для click метода
    const clickMock = jest.fn();
    downloadLink.click = clickMock;

    fireEvent.click(downloadButton);

    expect(clickMock).toHaveBeenCalled();
    expect(downloadLink).toHaveAttribute(
      'download',
      `${mockResults.length}_items.csv`,
    );
  });
});
