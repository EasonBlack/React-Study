

export default function reducer(state, action) {
    switch (action.type) {
        case "FILE_CHANGE":

            return action.object

        default:
            console.log('reducer trigger');
            return state;

    }
}
