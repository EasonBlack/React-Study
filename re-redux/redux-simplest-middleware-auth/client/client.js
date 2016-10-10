import {applyMiddleware, createStore} from 'redux';
import axios from 'axios';

const reducer=function(state, action) {
    if(action.type==="INC") {
        return state+ action.payload;
    }
    return state;
}


const auth = (store) => (next) => (action) => {
    if(action.isAuth) {
        axios({
            method: 'get',
            url: '/check',
            headers: {'token': 'xxxx'}
        }) .then(function (response) {
            console.log(response);
            next(action)
        })
    } else {
        next(action)
    }
}

const middleware = applyMiddleware(auth);

const store = createStore(reducer, 1 , middleware);


store.subscribe(()=> {
    console.log("store changed", store.getState())
});

store.dispatch({type: "INC", payload:1, isAuth: true});
store.dispatch({type: "INC", payload:2, isAuth: false});
store.dispatch({type: "INC", payload:5});