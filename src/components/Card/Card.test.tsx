import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import selectedReducer, { toggleSelectItem } from '../../slices/selectedSlice';
import { ThemeProvider } from '../../context/ThemeContext';
import Card from './Card';
import { mockCharacter } from '../../../test/mockData';

const store = configureStore({
  reducer: {
    selected: selectedReducer,
  },
});

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <ThemeProvider>{component}</ThemeProvider>
    </Provider>,
  );
};

describe('Card Component', () => {
  test('renders character card with correct details', () => {
    renderWithProviders(<Card character={mockCharacter} onClick={() => {}} />);

    const imageElement = screen.getByAltText(mockCharacter.name);
    expect(imageElement).toBeInTheDocument();

    const src = imageElement.getAttribute('src');
    expect(src).toContain(
      'url=https%3A%2F%2Fstarwars-visualguide.com%2Fassets%2Fimg%2Fcharacters%2F1.jpg',
    );

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.description)).toBeInTheDocument();
  });

  test('checks checkbox is unchecked when character is not selected', () => {
    renderWithProviders(<Card character={mockCharacter} onClick={() => {}} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('checks checkbox is checked when character is selected', () => {
    store.dispatch(toggleSelectItem(mockCharacter));
    renderWithProviders(<Card character={mockCharacter} onClick={() => {}} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('triggers onClick prop when card is clicked', () => {
    const onClick = jest.fn();
    renderWithProviders(<Card character={mockCharacter} onClick={onClick} />);

    const cardElement = screen.getByTestId('card');

    fireEvent.click(cardElement);
    expect(onClick).toHaveBeenCalled();
  });

  test('does not trigger onClick when clicking on checkbox', () => {
    const onClick = jest.fn();
    renderWithProviders(<Card character={mockCharacter} onClick={onClick} />);

    fireEvent.click(screen.getByRole('checkbox'));
    expect(onClick).not.toHaveBeenCalled();
  });

  test('applies correct theme class based on theme context', () => {
    renderWithProviders(<Card character={mockCharacter} onClick={() => {}} />);
  });
});
