
export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return Object.assign({},state, {
                todos: [{
                    text: action.text,
                    completed: false,
                    id: action.id
                }, ...state.todos]
            });

        case 'DELETE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter(function (todo) {
                    return todo.id !== action.id
                })
            });

        default:
            return state;

    }
}
