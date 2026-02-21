/**
 * Error Boundary Component
 * Catches errors from child components and displays fallback UI
 * Helps gracefully handle API failures and other runtime errors
 */

import React, { ReactNode, ReactElement } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
  onError?: (error: Error, info: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
    if (this.props.onError) {
      this.props.onError(error, info);
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.reset);
      }

      return (
        <Alert variant="destructive" className="my-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription className="mt-2">
            <p className="text-sm">{this.state.error.message}</p>
            <button
              onClick={this.reset}
              className="mt-3 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Try again
            </button>
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}

/**
 * API Error Display Component
 * Shows user-friendly error message when API fetch fails
 */

interface ApiErrorDisplayProps {
  error: string | null;
  onRetry: () => void;
  showDetails?: boolean;
}

export const ApiErrorDisplay: React.FC<ApiErrorDisplayProps> = ({
  error,
  onRetry,
  showDetails = false,
}) => {
  if (!error) return null;

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Failed to load data</AlertTitle>
      <AlertDescription>
        <p className="mt-2 text-sm">
          {showDetails
            ? error
            : 'Unable to fetch the latest data. Using cached information.'}
        </p>
        <button
          onClick={onRetry}
          className="mt-3 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Retry
        </button>
      </AlertDescription>
    </Alert>
  );
};

/**
 * Loading Skeleton for Personas
 */

export const PersonaSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
};
