import React from 'react';
import ReactDOM  from 'react-dom';


import { Router, Route, Link, hashHistory } from 'react-router';
import routes from './components/rootRouter';

ReactDOM.render((
  <Router  routes={routes} history={hashHistory}></Router >
), document.getElementById('app'))