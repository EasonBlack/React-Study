


export default function reducer(state, action) {
    switch (action.type) {
        case "GET_PHOTOS":
             return  Object.assign({},state,{photos: action.photos })
        case "TEST_HANDLE":
            var _result =  Object.assign({},state,{text:action.text });
            return _result;
        default:
            console.log('reducer trigger');
            return state;

    }
}
