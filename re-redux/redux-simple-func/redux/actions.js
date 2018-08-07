let nextTodoId = 0

let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            id: nextTodoId++,
            text 
        }
    },

    deleteTodo: function (id) {
        return {
            type: 'DELETE_TODO',
            id
        };
    }
}

export default actions;
