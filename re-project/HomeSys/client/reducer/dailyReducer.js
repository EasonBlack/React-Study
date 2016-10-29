export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "DAILY_LIST_SHOW":
            let a = Object.assign({}, state, {
                daily_list: action.daily_list
            });
            return a;
        case "SELECT_DAILY":
            return  Object.assign({}, state, {
                select_daily: action.daily_item
            });
        case "CLEAR_DAILY":
            return Object.assign({},state, {
                select_daily: null
            });
        case "DAILY_ITEM_TYPE":
            return Object.assign({}, state, {
                selectedCategory: action.selectedCategory
            });
        case "RICH_ITEM_LIST":
            return Object.assign({}, state, {
                rich_item_list: action.rich_item_list
            });
        case "SELECT_RICH_ITEM":
            return Object.assign({}, state, {
                selectedRichItem: action.selectedRichItem
            });
        case "SET_RICH_ITEM":
            return Object.assign({}, state, {
                rich_item: action.rich_item
            });
        case "SET_SERIES_ITEM":
            return Object.assign({}, state, {
                series_item: action.series_item
            });
        case "DAILY_MONTH_SHOW":
            return Object.assign({}, state, {
                month_list: action.month_list
            });
        default:
            return state;
    }
}