export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "DAILY_LIST_SHOW":
            let a = Object.assign({}, state, {
                daily_list: action.daily_list
            });
            return a
        default:
            return state;
    }
}