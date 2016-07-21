import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import App from './layout/app';

import {createStore} from 'redux';
import reducer from './reducer/index';
import {Provider} from 'react-redux';

let initialState = {
    home: {
        step: 1,
        info : {}
    }
}
let store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'))