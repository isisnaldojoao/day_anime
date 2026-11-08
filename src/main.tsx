import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import Snowfall from 'react-snowfall';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Snowfall
       snowflakeCount={90}
       style={{ zIndex: 30, position: 'fixed', inset: 0, pointerEvents: 'none' }}
     />
    <Toaster />
    <App />
  </React.StrictMode>,
)
