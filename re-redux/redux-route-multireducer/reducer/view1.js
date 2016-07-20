export default function reducer(state = {view1count: 0}, action={}) {
    switch (action.type) {
        case "ADD_VIEW1":
            console.log(state);
            var _count = state.view1count;
            _count++;
            return Object.assign({}, state, {
                view1count: _count
            });
        default:
            return state;
    }
}