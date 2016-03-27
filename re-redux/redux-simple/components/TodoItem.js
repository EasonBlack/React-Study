import React from 'react';

class TodoItem extends React.Component {

    handleCompleted() {
        this.props.completeTodo(this.props.todo.id);
    }

    handleDelete() {
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        return <div>
            {this.props.todo.text}
            <button onClick={this.handleDelete.bind(this)}>Del</button>
            <button onClick={this.handleCompleted.bind(this)} >Complete</button>
        </div>
    }
}

export default TodoItem;