import { Component, type ReactNode, type ErrorInfo } from 'react';
export class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render failed', error, info);
  }
  render() {
    return this.state.failed ? (
      <main role="alert" className="error-state">
        <h1>Something went wrong</h1>
        <p>Please reload the portfolio to try again.</p>
        <button onClick={() => window.location.reload()}>
          Reload portfolio
        </button>
      </main>
    ) : (
      this.props.children
    );
  }
}
