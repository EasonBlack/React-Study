export default function reducer(state = {}, action={}) {
    switch (action.type) {
        case "PROJECT_LIST_SHOW":
            let a = Object.assign({}, state, {
                projects: action.projects
            });
            console.log(a);
            return a

        default:
            return state;
    }
}