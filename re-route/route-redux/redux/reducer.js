


export default function reducer(state, action) {
    switch (action.type) {
        case "TEST_HANDLE":
            //state.text = action.text;
            console.log(state,action);
            var _result =  Object.assign({},state,{text:action.text });
            console.log(_result);
            return _result;
        default:
            console.log('reducer trigger');
            return state;

    }
}
