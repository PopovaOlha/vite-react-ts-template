import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorFallback from './ErrorFallback';

describe('ErrorFallback', () => {
  const error = new Error('Test error');
  const resetErrorBoundary = jest.fn();

  test('renders error message and button', () => {
    render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />,
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
    expect(screen.getByText('reload the page')).toBeInTheDocument();
  });

  test('calls resetErrorBoundary on button click', () => {
    render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />,
    );

    fireEvent.click(screen.getByText('Try Again'));

    expect(resetErrorBoundary).toHaveBeenCalled();
  });

  test('reloads the page on link click', () => {
    const reloadMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />,
    );

    fireEvent.click(screen.getByText('reload the page'));

    expect(reloadMock).toHaveBeenCalled();
  });
});
