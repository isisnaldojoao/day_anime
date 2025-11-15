import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import Snowfall from 'react-snowfall';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Snowfall style={{ zIndex: 0, position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}/>
    <Toaster />
    <App />
  </React.StrictMode>,
)
