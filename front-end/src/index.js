import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './Context/userContext';
import { ItemProvider } from './Context/itemContext';
import { PostProvider } from './Context/postContext';
import { SlideProvider } from './Context/slideContext';
import { PhotoProvider } from './Context/photoContext';
import { EventProvider } from './Context/eventContext';
import { StoreItemProvider } from './Context/storeItemContext';
import { GuestBookProvider } from './Context/guestBookContext';
import { BioProvider } from './Context/bioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BioProvider>
    <GuestBookProvider>
      <StoreItemProvider>
        <EventProvider>
          <PhotoProvider>
            <SlideProvider>
              <PostProvider>
                <ItemProvider>
                  <UserProvider>
                    <App />
                  </UserProvider>
                </ItemProvider>
              </PostProvider>
            </SlideProvider>
          </PhotoProvider>
        </EventProvider>
      </StoreItemProvider>
    </GuestBookProvider>
    </BioProvider>
  </React.StrictMode>
);
