import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../../slices/searchSlice';
import selectedReducer from '../../slices/selectedSlice';
import {
  searchApi,
  useGetCharacterDetailsQuery,
} from '../../slices/searchApiSlices';
import Details from './Details';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('../../slices/searchApiSlices', () => ({
  useGetCharacterDetailsQuery: jest.fn(),
}));

const mockStore = configureStore({
  reducer: {
    search: searchReducer,
    selected: selectedReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

const renderWithProviders = (
  component: React.ReactNode,
  route = '/details/1',
) => {
  const router = createMemoryRouter(
    [
      { path: '/', element: <div>Home</div> },
      { path: '/details/:id', element: component },
    ],
    {
      initialEntries: [route],
    },
  );

  return render(
    <Provider store={mockStore}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>,
  );
};

describe('Details Component', () => {
  it('renders details correctly when data is available', () => {
    (useGetCharacterDetailsQuery as jest.Mock).mockReturnValue({
      data: {
        id: '1',
        name: 'Luke Skywalker',
        description: '19BBY',
        image: '/path/to/image.jpg',
        height: '172',
        mass: '77',
        gender: 'Male',
      },
      isLoading: false,
    });

    renderWithProviders(<Details />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('19BBY')).toBeInTheDocument();
    expect(screen.getByText('172')).toBeInTheDocument();
    expect(screen.getByText('77')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByAltText('Luke Skywalker')).toHaveAttribute(
      'src',
      '/path/to/image.jpg',
    );
  });

  it('shows loader when data is loading', () => {
    (useGetCharacterDetailsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    renderWithProviders(<Details />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows message when no details are available', () => {
    (useGetCharacterDetailsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    });

    renderWithProviders(<Details />);

    expect(screen.getByText('Details not available')).toBeInTheDocument();
  });

  it('navigates to the home page when the close button is clicked', () => {
    (useGetCharacterDetailsQuery as jest.Mock).mockReturnValue({
      data: {
        id: '1',
        name: 'Luke Skywalker',
        description: '19BBY',
        image: '/path/to/image.jpg',
        height: '172',
        mass: '77',
        gender: 'Male',
      },
      isLoading: false,
    });

    renderWithProviders(<Details />);

    fireEvent.click(screen.getByText('Close'));

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
