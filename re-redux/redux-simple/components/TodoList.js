import React from 'react';
import ReactDOM  from 'react-dom';

class TodoList extends React.Component {

    render() {
        return <ul>
           {
               this.props.todos.map((todo)=> {
                   return <li key={todo.id}>{todo.text}</li>
               })
               }
        </ul>
    }
}

export default TodoList;