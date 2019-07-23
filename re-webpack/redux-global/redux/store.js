import { createStore } from 'redux';
import reducer from './reducer';

// add middleware

export default function configureStore(initialState) {
    return createStore(reducer, initialState);
}
