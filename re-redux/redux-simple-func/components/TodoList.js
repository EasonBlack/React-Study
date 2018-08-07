import React from 'react';
import TodoItem from './TodoItem'


const TodoList = ({todos, deleteTodo})=>{
    console.log(todos, deleteTodo);
    return (
    
    <ul>
        {
            todos.map( todo => {
                return (<TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                />)
            })
        }
    </ul>
)}

export default TodoList;