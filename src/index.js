// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';
import './styles/index.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
