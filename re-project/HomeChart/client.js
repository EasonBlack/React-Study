import React from 'react';
import ReactDOM  from 'react-dom';
import App  from './components/container.js';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import {Provider} from 'react-redux';

let initialState = {
    content: {text: ''}
}

let store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container'))