import { render, screen, fireEvent } from '@testing-library/react';
import SearchResults from './SearchResults';
import '@testing-library/jest-dom';
import { mockResults } from '../../../test/mockData';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import searchReducer from '../../slices/searchSlice';
import selectedReducer from '../../slices/selectedSlice';
import { searchApi } from '../../slices/searchApiSlices';
import { ThemeProvider } from '../../context/ThemeContext';

const mockOnItemClick = jest.fn();

const store = configureStore({
  reducer: {
    search: searchReducer,
    selected: selectedReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

describe('SearchResults Component', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <Provider store={store}>
        <ThemeProvider>{component}</ThemeProvider>
      </Provider>,
    );
  };

  test('renders the specified number of cards', () => {
    renderWithProviders(
      <SearchResults results={mockResults} onItemClick={mockOnItemClick} />,
    );
    const cardElements = screen.getAllByRole('img');
    expect(cardElements).toHaveLength(mockResults.length);
  });

  test('displays appropriate message if no cards are present', () => {
    renderWithProviders(
      <SearchResults results={[]} onItemClick={mockOnItemClick} />,
    );
    const messageElement = screen.getByText('No cards available');
    expect(messageElement).toBeInTheDocument();
  });

  test('calls onItemClick with correct id when a card is clicked', () => {
    renderWithProviders(
      <SearchResults results={mockResults} onItemClick={mockOnItemClick} />,
    );

    const firstCard = screen.getByText(mockResults[0].name);
    fireEvent.click(firstCard);

    expect(mockOnItemClick).toHaveBeenCalledWith(mockResults[0].id);
  });
});
