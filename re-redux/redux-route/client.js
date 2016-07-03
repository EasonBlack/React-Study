import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import  Main  from './components/Main/main.js';
import  View1  from './components/view1/view1.js';
import  View2  from './components/view2/view2.js';
import {createStore} from 'redux';
import reducer from './redux/reducer';
import {Provider} from 'react-redux';

let initialState = {
    view1count: 0,
    view2count: 0
}

let store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <Route path="view1" component={View1}/>
                <Route path="view2" component={View2}/>
                <Route path="*" component={View1}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container'))