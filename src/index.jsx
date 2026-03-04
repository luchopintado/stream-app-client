import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';

import App from './component/App.jsx';
import reducers from './reducers';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxThunk),
    devTools: true,
});

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
            <App />
        </Provider>
    </GoogleOAuthProvider>
);
