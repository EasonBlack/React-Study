export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "STATIC_GROUP_SUM":
            let a = Object.assign({}, state, {
                'static_group_sum': action.res
            });
            return a
        default:
            return state;
    }
}