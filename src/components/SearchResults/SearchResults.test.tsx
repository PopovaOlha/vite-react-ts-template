import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';
import '@testing-library/jest-dom';
import { mockResults } from '../../../test/mockData';

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
