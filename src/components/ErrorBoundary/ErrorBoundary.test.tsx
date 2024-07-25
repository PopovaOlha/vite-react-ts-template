import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const FallbackComponent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div>
    <div data-testid="error-message">{error.message}</div>
    <button onClick={resetErrorBoundary} data-testid="reset-button">
      Reset
    </button>
  </div>
);

class ErrorThrowingComponent extends React.Component {
  componentDidMount() {
    throw new Error('Test error');
  }

  render() {
    return <div>Test</div>;
  }
}

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error;

  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  test('renders children if no error', () => {
    render(
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <div data-testid="child">Child component</div>
      </ErrorBoundary>,
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  test('renders FallbackComponent if error is thrown', async () => {
    await act(async () => {
      render(
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <ErrorThrowingComponent />
        </ErrorBoundary>,
      );
    });

    expect(screen.getByTestId('error-message')).toHaveTextContent('Test error');
    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });

  test('resets error state when resetErrorBoundary is called', async () => {
    await act(async () => {
      render(
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <ErrorThrowingComponent />
        </ErrorBoundary>,
      );
    });

    expect(screen.getByTestId('error-message')).toHaveTextContent('Test error');

    await act(async () => {
      fireEvent.click(screen.getByTestId('reset-button'));
    });
  });
});
