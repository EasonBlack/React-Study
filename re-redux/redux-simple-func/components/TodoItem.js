import React from 'react';

const TodoItem = ({todo, deleteTodo})=>(
    <div>
        {todo.text}
        <button onClick={()=>deleteTodo(todo.id)}>Del</button>
    </div>
)

export default TodoItem;