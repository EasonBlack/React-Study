export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_VIEW1":
            console.log(state);
            var _count = state.view1count;
            _count++;
            return Object.assign({}, state, {
                view1count: _count
            });

        case 'ADD_VIEW2':
            var _count = state.view2count;
            _count++;
            return Object.assign({}, state, {
                view2count: _count
            });

        default:
            return state;

    }
}
