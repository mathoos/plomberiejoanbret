import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

import './style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>
);