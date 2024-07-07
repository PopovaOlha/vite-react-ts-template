import React, { Component } from 'react';

interface ErrorBoundaryProps {
  FallbackComponent: React.ComponentType<{
    error: Error;
    resetErrorBoundary: () => void;
  }>;
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

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
