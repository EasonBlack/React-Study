import React , { Component } from 'react';
import Main from './Main.js';
import List from './List.js';
import { Router, Route, Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../redux/actions.js'


class App extends Component {

    render() {
        console.log(this.props);
        return   <Router history={browserHistory}>
            <Route path="/" component={Main}  >
                <Route path="list" component={List} actions={this.props.actions} />
                <Route path="*" component={List}/>
            </Route>
        </Router>
    }
}

function mapStateToProps(state){
    return state;
}

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
