import { createStore , applyMiddleware, compose } from 'redux';
import reducer from './reducer';
//import reducer from './reducer/projectReducer'
import thunk from 'redux-thunk';


let finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore)

export default function configureStore(initialState = {}) {
    console.log('trigger store');
    return finalCreateStore(reducer, initialState)
}
