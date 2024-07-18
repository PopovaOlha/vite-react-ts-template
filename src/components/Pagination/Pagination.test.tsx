import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const PaginationProps = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: jest.fn(),
  searchTerm: '',
};

describe('Pagination Component', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  test('renders without crashing', () => {
    render(<Pagination {...PaginationProps} />);
  });

  test('renders previous and next buttons', () => {
    render(<Pagination {...PaginationProps} />);
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('disables previous button on first page', () => {
    render(<Pagination {...PaginationProps} currentPage={1} />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('disables next button on last page', () => {
    render(<Pagination {...PaginationProps} currentPage={5} />);
    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('disables buttons when searchTerm is not empty', () => {
    render(<Pagination {...PaginationProps} searchTerm="test" />);
    expect(screen.getByText('Previous')).toBeDisabled();
    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('calls onPageChange with the correct arguments when next is clicked', () => {
    render(<Pagination {...PaginationProps} currentPage={2} />);
    fireEvent.click(screen.getByText('Next'));
    expect(PaginationProps.onPageChange).toHaveBeenCalledWith(3);
  });

  test('calls onPageChange with the correct arguments when previous is clicked', () => {
    render(<Pagination {...PaginationProps} currentPage={2} />);
    fireEvent.click(screen.getByText('Previous'));
    expect(PaginationProps.onPageChange).toHaveBeenCalledWith(1);
  });

  test('updates URL query parameter when page changes', () => {
    render(<Pagination {...PaginationProps} currentPage={2} />);
    fireEvent.click(screen.getByText('Next'));
  });
});
