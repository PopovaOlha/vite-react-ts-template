import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import {
  mockResults,
  fetchSearchResults,
  getCachedCharacterDetails,
} from '../../../test/mockData';

// Mock functions
jest.mock('../../api/api', () => ({
  fetchSearchResults: jest.fn(),
  getCachedCharacterDetails: jest.fn(),
}));

describe('Card Component', () => {
  const mockCard = mockResults[0];
  const onClickMock = jest.fn(() => getCachedCharacterDetails(mockCard.id));

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
    render(<Card {...mockCard} onClick={onClickMock} />);

    expect(screen.getByText(mockCard.name)).toBeInTheDocument();
    expect(screen.getByText(mockCard.description)).toBeInTheDocument();
    expect(
      screen.getByText((_, element) => {
        return element?.textContent === `Age: ${mockCard.age}`;
      }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockCard.name)).toBeInTheDocument();
  });

  test('clicking on a card opens detailed card component', () => {
    render(<Card {...mockCard} onClick={onClickMock} />);

    const card = screen.getByText(mockCard.name);
    fireEvent.click(card);

    expect(onClickMock).toHaveBeenCalled();
  });

  test('clicking on a card triggers an additional API call to fetch detailed information', async () => {
    render(<Card {...mockCard} onClick={onClickMock} />);

    const card = screen.getByText(mockCard.name);
    fireEvent.click(card);

    expect(onClickMock).toHaveBeenCalled();
    expect(getCachedCharacterDetails).toHaveBeenCalledWith(mockCard.id);
  });
});
