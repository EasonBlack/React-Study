export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "DAILY_LIST_SHOW":
            let a = Object.assign({}, state, {
                daily_list: action.daily_list
            });
            return a;
        case "DAILY_ITEM_TYPE":
            return Object.assign({}, state, {
                selectedCategory: action.selectedCategory
            });
        default:
            return state;
    }
}