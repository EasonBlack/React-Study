import React from 'react';
import ReactDOM  from 'react-dom';
import TodoInput  from './TodoInput.js';
import TodoList from './TodoList.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../redux/actions.js'

class App extends React.Component {

    render() {
        console.log(actions);
        return  <div>
             <h1>Todo List</h1>
             <TodoInput addTodo={this.props.actions.addTodo} />
             <TodoList todos={this.props.todos} actions={this.props.actions}/>
        </div>;
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
