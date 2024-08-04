import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import searchReducer, { setSearchTerm } from '../../slices/searchSlice';
import { ThemeProvider } from '../../context/ThemeContext';

const mockOnSearch = jest.fn();

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

describe('Search Component', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <Provider store={store}>
        <ThemeProvider>{component}</ThemeProvider>
      </Provider>,
    );
  };

  test('renders input and button', () => {
    renderWithProviders(<Search onSearch={mockOnSearch} searchTerm="" />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('updates local state when typing in input', () => {
    renderWithProviders(<Search onSearch={mockOnSearch} searchTerm="" />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  test('dispatches setSearchTerm and calls onSearch on form submit', () => {
    renderWithProviders(<Search onSearch={mockOnSearch} searchTerm="" />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    act(() => {
      fireEvent.submit(screen.getByRole('button', { name: 'Search' }));
    });

    expect(mockOnSearch).toHaveBeenCalledWith('test');
    expect(store.getState().search.searchTerm).toBe('test');
  });

  test('updates localSearchTerm from Redux store on searchTerm change', () => {
    renderWithProviders(
      <Search onSearch={mockOnSearch} searchTerm="updated" />,
    );
    const input = screen.getByPlaceholderText('Search...');

    act(() => {
      store.dispatch(setSearchTerm('new term'));
    });

    expect(input).toHaveValue('new term');
  });
});
