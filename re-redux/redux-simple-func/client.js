import React from 'react';
import ReactDOM  from 'react-dom';
import App  from './components/container';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import reducer from './redux/reducer';

let initialState = {
    todos: [
    ]
}

let store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>,
    document.getElementById('container'))