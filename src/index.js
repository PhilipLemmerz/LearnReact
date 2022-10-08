import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';

import './index.css';
import App from './App';

ReactDOM.render(
    // Der globale Favorites Context wird in meetup-item.js genutzt
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>,
    document.getElementById('root')
);
