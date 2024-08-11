import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';
import { JSX } from 'react/jsx-runtime';
import PaginationProps from '../../types/interfaces';

const setup = (props: JSX.IntrinsicAttributes & PaginationProps) => {
  const utils = render(<Pagination {...props} />);
  const prevButton = screen.getByText('Previous');
  const nextButton = screen.getByText('Next');
  return {
    ...utils,
    prevButton,
    nextButton,
  };
};

describe('Pagination Component', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: jest.fn(),
    searchTerm: '',
  };

  it('renders the Pagination component with initial props', () => {
    setup(defaultProps);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('disables "Previous" button when on the first page', () => {
    setup(defaultProps);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('disables "Next" button when on the last page', () => {
    const props = { ...defaultProps, currentPage: 5 };
    setup(props);
    expect(screen.getByText('Next')).toBeDisabled();
  });

  it('disables both buttons when a search term is present', () => {
    const props = { ...defaultProps, searchTerm: 'test' };
    setup(props);
    expect(screen.getByText('Previous')).toBeDisabled();
    expect(screen.getByText('Next')).toBeDisabled();
  });

  it('calls onPageChange with the correct page number when "Previous" button is clicked', () => {
    const props = { ...defaultProps, currentPage: 2 };
    const { prevButton } = setup(props);
    fireEvent.click(prevButton);
    expect(props.onPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange with the correct page number when "Next" button is clicked', () => {
    const { nextButton } = setup(defaultProps);
    fireEvent.click(nextButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });
});
