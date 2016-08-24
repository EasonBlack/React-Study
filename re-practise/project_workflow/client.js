import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer/index';
import {Provider} from 'react-redux';
import configureStore from './store.js';

import  App  from './components/layout/app.js';
import  ProjectList from './components/pages/project/ProjectList/project-list.js';
import  Project  from './components/pages/project/Project/project.js';
import  ProjectFeed from './components/pages/project/ProjectFeed/project-feed.js';
import  DataBase  from './components/pages/database/database.js';


let initialState = {}

//let store = createStore(reducer, initialState);
let store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/projectlist" component={ProjectList}/>
                <Route path="/project/:projectId" component={Project}>
                    <Route path="/project/:projectId/feed" component={ProjectFeed}/>
                </Route>
                <Route path="/database" component={DataBase}/>
                <Route path="*" component={Project}/>
            </Route>

        </Router>
    </Provider>,
    document.getElementById('app'))