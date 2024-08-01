import { useRouter } from 'next/router';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const router = useRouter();

  return (
    <div>
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
      <p>
        Alternatively, you can{' '}
        <button onClick={() => router.reload()}>reload the page</button>.
      </p>
    </div>
  );
};

export default ErrorFallback;
