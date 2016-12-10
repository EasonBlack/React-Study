export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "RICH_LIST_SHOW":
            return Object.assign({}, state, {
                richlist: action.result
            });
        case "RICH_PAGE":
            return Object.assign({}, state, {
                currentPage: action.result
            });
        default:
            return state;
    }
}