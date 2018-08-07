import {connect} from 'react-redux';
import {deleteTodo} from '../redux/actions.js'
import TodoList from '../components/TodoList.js';


function mapStateToProps(state) {
   
    return {
        todos: state.todos
    };
}

var mapDispatchToProps = function (dispatch) {
    return {
        deleteTodo: id => dispatch(deleteTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);