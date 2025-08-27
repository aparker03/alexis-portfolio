import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Derive basename from PUBLIC_URL so routing matches your deployed path.
// On localhost, PUBLIC_URL is usually empty → basename becomes "/".
const publicUrl = process.env.PUBLIC_URL || '/';
const base = new URL(publicUrl, window.location.origin).pathname || '/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional performance reporting
reportWebVitals();
