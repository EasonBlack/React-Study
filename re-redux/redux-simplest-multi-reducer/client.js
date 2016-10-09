import {combineReducers, createStore} from 'redux';


const userReducer = (state={}, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            state = {...state, name: action.payload};
            break;
        case "CHANGE_AGE":
            state = {...state, age: action.payload};
            break;

    }
    return state;
};
const tweetsReducer = (state=[], action) => {
    switch (action.type) {
        case "TWEET_ADD":
            state = state.concat(action.payload)
            break;
    }
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})

const store = createStore(reducers);

store.subscribe(()=> {
    console.log("store changed", store.getState())
});

store.dispatch({type: "CHANGE_NAME", payload: "xxx"});
store.dispatch({type: "CHANGE_AGE", payload: 33});
store.dispatch({type: "TWEET_ADD", payload: {title: "aaaa"}});