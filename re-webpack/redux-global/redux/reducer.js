

export default function reducer(state = {
    num: 1
}, action) {
    switch (action.type) {
        case "ADD": {
            return Object.assign({}, state, {
                num : state.num + 1
            })
        }
        case "MINUSE": {
            return Object.assign({}, state, {
                num : state.num - 1 
            })
        }    

        default:
            return state;

    }
}
