import React from 'react';
import ReactDOM from 'react-dom/client';

import { ErrorBoundary } from './components/ErrorBoundary';

import { App } from './App/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
