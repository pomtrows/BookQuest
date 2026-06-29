import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="fixed inset-0 z-[9999] bg-red-900 text-white flex items-center justify-center p-8">
          <div className="bg-black p-6 rounded border-2 border-red-500">
            <h2 className="text-2xl font-bold mb-4">Error Rendering Component</h2>
            <pre className="text-xs font-mono bg-gray-900 p-4 overflow-auto max-w-2xl">{this.state.error?.message}</pre>
            <pre className="text-xs font-mono bg-gray-900 p-4 mt-2 overflow-auto max-w-2xl">{this.state.error?.stack}</pre>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => this.setState({ hasError: false })}>Try Again</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
