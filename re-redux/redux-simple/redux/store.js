import { createStore } from 'redux';
import reducer from './reducer';

// add middleware

export default function configureStore(initialState = {todos: []}) {
    return createStore(reducer, initialState);
}
