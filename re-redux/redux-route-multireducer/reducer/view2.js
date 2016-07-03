export default function reducer(state= {view2count: 0}, action) {
    switch (action.type) {
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