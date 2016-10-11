import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, Link, browserHistory, hashHistory, IndexRoute} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer/index';
import {Provider} from 'react-redux';
import configureStore from './store.js';

import App  from './app/app.js';
import Daily from './app/daily/daily.js';
import DailyDay from './app/daily-day/daily-day.js';
import DailyList from './app/daily/daily-list/daily-list.js';
import DailyCalendar from './app/daily/daily-calendar/daily-calendar.js';


let initialState = {}

let store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/daily" component={Daily}>
                    <IndexRoute component={DailyCalendar} />
                    <Route path="daily-list" component={DailyList} />
                    <Route path="daily-calendar" component={DailyCalendar} />
                </Route>
                <Route path="/daily/:date" component={DailyDay}/>
                <Route path="*" component={Daily}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'))