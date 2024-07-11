import { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/interfaces';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error);
    this.setState({ hasError: true, error });
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { FallbackComponent, children } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <FallbackComponent
          error={error as Error}
          resetErrorBoundary={this.resetErrorBoundary}
        />
      );
    }

    return children || null;
  }
}

export default ErrorBoundary;
