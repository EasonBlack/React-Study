export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "ITEM_TYPE":
            let a = Object.assign({}, state, {
                item_type: action.item_type
            });
            return a
        default:
            return state;
    }
}