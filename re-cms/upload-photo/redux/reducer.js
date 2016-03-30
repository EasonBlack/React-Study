function getId(state) {
    return state.points.reduce((maxId, point) => {
            return Math.max(point.id, maxId);
        }, -1) + 1
}


export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_POINT":
            return Object.assign({},state, {
                points: [{
                    x: action.x,
                    y: action.y,
                    id: getId(state)
                }, ...state.points]
            });
        default:
            console.log('reducer trigger');
            return state;

    }
}
