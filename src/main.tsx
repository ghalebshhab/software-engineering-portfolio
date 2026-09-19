import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { ErrorBoundary } from './shared/components/ErrorBoundary';
import './styles/portfolio.css';
import './styles/accessibility.css';
const root = document.getElementById('root');
if (!root) throw new Error('Application root element is missing');
createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
