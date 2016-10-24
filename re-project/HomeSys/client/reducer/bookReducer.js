export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "BOOK_LIST_SHOW":
            return Object.assign({}, state, {
                booklist: action.result
            });
        default:
            return state;
    }
}