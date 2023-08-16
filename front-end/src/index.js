import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './Context/userContext';
import { ItemProvider } from './Context/itemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ItemProvider>
  </React.StrictMode>
);
