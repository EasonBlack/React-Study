import React, {Component} from 'react';
import TodoInput  from './TodoInput.js';
import TodoList from '../containers/TodoList.js';

const App = ({todos, actions}) => (<div>
             <h1>Todo List</h1>
             <TodoInput addTodo={actions.addTodo} />
             <TodoList />
        </div>)
  

export default App;

