import React from 'react';
import ReactDOM  from 'react-dom';
import App from '../components/app.js';

import configureStore from '../redux/store.js';
import { Provider  } from 'react-redux';

let initialState = {
    points: [
    ]
}

let store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('app'))