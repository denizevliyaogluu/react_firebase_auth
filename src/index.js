import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//context
import { FireBaseProvider } from './context/FirebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FireBaseProvider>
      <App />
    </FireBaseProvider>
  </React.StrictMode>
);
