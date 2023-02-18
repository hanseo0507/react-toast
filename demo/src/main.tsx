import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastProvider } from '../../';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
