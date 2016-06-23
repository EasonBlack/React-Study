import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/layout/app.js';
import Page1 from './components/page/page1.js';
import Page2 from './components/page/page2.js';

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="page1" component={Page1}/>
            <Route path="page2" component={Page2}/>
            <Route path="*" component={Page1}/>
        </Route>
    </Router>
);

ReactDOM.render((
    routes
), document.getElementById('app'))