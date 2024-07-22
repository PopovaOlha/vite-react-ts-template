import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import {
  mockResults,
  fetchSearchResults,
  getCachedCharacterDetails,
} from '../../../test/mockData';

jest.mock('../../api/api', () => ({
  fetchSearchResults: jest.fn(),
  getCachedCharacterDetails: jest.fn(),
}));

describe('Card Component', () => {
  const mockCharacter = mockResults[0];
  const onClickMock = jest.fn(() =>
    getCachedCharacterDetails(mockCharacter.id),
  );

  beforeEach(() => {
    fetchSearchResults.mockResolvedValue(mockResults);
    getCachedCharacterDetails.mockImplementation((id: string) =>
      mockResults.find((character) => character.id === id),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the relevant card data', () => {
    render(<Card character={mockCharacter} onClick={onClickMock} />);

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.description)).toBeInTheDocument();
    expect(
      screen.getByText((_, element) => {
        return element?.textContent === `Age: ${mockCharacter.age}`;
      }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockCharacter.name)).toBeInTheDocument();
  });

  test('clicking on a card opens detailed card component', () => {
    render(<Card character={mockCharacter} onClick={onClickMock} />);

    const card = screen.getByText(mockCharacter.name);
    fireEvent.click(card);

    expect(onClickMock).toHaveBeenCalled();
  });

  test('clicking on a card triggers an additional API call to fetch detailed information', async () => {
    render(<Card character={mockCharacter} onClick={onClickMock} />);

    const card = screen.getByText(mockCharacter.name);
    fireEvent.click(card);

    expect(onClickMock).toHaveBeenCalled();
    expect(getCachedCharacterDetails).toHaveBeenCalledWith(mockCharacter.id);
  });
});
