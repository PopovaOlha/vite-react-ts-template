'use client';

import * as React from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
      <p>
        Alternatively, you can{' '}
        <button onClick={() => window.location.reload()}>
          reload the page
        </button>
        .
      </p>
    </div>
  );
};

export default ErrorFallback;
