import uuid from 'node-uuid';


export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_POINT":
            return Object.assign({}, state, {
                points: [{
                    x: action.x,
                    y: action.y,
                    id: uuid.v1()
                }, ...state.points]
            });
        case "GET_PHOTOS":
             return  Object.assign({},state,{ photos: action.photos })
        case "CLEAR_POINT":
            return Object.assign({}, state, {points: []})
        case "TEST_HANDLE":
            var _result =  Object.assign({},state,{text:action.text });
            return _result;
        default:
            console.log('reducer trigger');
            return state;

    }
}
