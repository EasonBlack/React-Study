import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {

    render() {
        return <ul>
           {
               this.props.todos.map(function (todo) {
                   return (<TodoItem
                       key={todo.id}
                       todo={todo}
                       deleteTodo={this.props.actions.deleteTodo}
                       completeTodo={this.props.actions.completeTodo} />)
               }.bind(this))
               }
        </ul>
    }
}

export default TodoList;