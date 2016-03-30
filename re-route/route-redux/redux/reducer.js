


export default function reducer(state, action) {
    switch (action.type) {
        case "TEST_HANDLE":
            //state.text = action.text;
            console.log(state,action);
            return Object.assign({},state,{text:action.text });
        default:
            console.log('reducer trigger');
            return state;

    }
}
