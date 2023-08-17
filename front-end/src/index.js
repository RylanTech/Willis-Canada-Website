import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './Context/userContext';
import { ItemProvider } from './Context/itemContext';
import { PostProvider } from './Context/postContext';
import { SlideProvider } from './Context/slideContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SlideProvider>
      <PostProvider>
      <ItemProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ItemProvider>
    </PostProvider>
    </SlideProvider>
  </React.StrictMode>
);
