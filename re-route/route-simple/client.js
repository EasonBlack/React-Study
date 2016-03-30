import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/app.js';
import User from './components/User.js';
import About from './components/About.js';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} test="ccccc"/>
            <Route path="user" component={User}/>
            <Route path="*" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))