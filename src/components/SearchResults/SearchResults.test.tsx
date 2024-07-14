import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';
import { Character } from '../../types/interfaces';
import '@testing-library/jest-dom';

const mockResults: Character[] = [
  {
    name: 'Character 1',
    description: 'Description 1',
    image: 'image1.png',
    age: '30',
  },
  {
    name: 'Character 2',
    description: 'Description 2',
    image: 'image2.png',
    age: '40',
  },
];

jest.fn().mockReturnValue(undefined);
const mockOnItemClick = jest.fn();

describe('SearchResults Component', () => {
  test('renders the specified number of cards', () => {
    render(
      <SearchResults results={mockResults} onItemClick={mockOnItemClick} />,
    );
    const cardElements = screen.getAllByRole('img');
    expect(cardElements).toHaveLength(mockResults.length);
  });

  test('displays appropriate message if no cards are present', () => {
    render(
      <SearchResults
        results={[]}
        onItemClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const messageElement = screen.getByText('No cards available');
    expect(messageElement).toBeInTheDocument();
  });
});
