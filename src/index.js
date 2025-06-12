import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './utils/animations.css';
import 'animate.css/animate.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
