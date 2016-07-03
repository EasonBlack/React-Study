

export default function reducer(state, action) {
    switch (action.type) {
        case "SET_TEXT":
            return Object.assign({},state, {
                content: {
                    text: action.text
                }
            });

        case 'GET_TEXT':
            return state

        default:
            return state;

    }
}
