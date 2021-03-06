import React , { Component } from 'react';
import Main from './Main.js';
import User from './User.js';
import About from './About.js';
import { Router, Route, Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../redux/actions.js'


class App extends Component {

    render() {
        console.log('props: ' , this.props.text);
        return   <Router history={browserHistory}>
            <Route path="/" component={Main}  textdisplay={this.props.text}>
                <Route path="about" component={About} foo='aaaa' testhandle={this.props.actions.testHandle}/>
                <Route path="user" component={User}  textdisplay={this.props.text} />
                <Route path="*" component={About}/>
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
