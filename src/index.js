import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { createStore, applyMiddleware } from 'redux';
//rootReducer
import rootReducer from './redux/index';
//react-redux Provider
import { Provider } from 'react-redux';

//redux-thunk
import thunk from 'redux-thunk';

//midlewares
const midlewares = [thunk];
//redux-logger with default options only in development environment
if (process.env.NODE_ENV === 'development') {

    const { logger } = require('redux-logger');
    midlewares.push(logger);
}

// create redux store
const store = createStore(
    rootReducer,
    applyMiddleware(...midlewares)
);

// Render react to root element

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// register service worker for offline-first / progressive web app
registerServiceWorker();
