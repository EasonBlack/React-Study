export default function reducer(state = {step: 1}, action={}) {
    switch (action.type) {
        case "NEXT_STEP":
            return Object.assign({}, state, {
                step: action.step
            });
        case "CONFIRM":
            return Object.assign({}, state, {
                info: action.info,step:1
            });
        case "SETINFO":
            return Object.assign({},state,{
                info:action.info
            })
        default:
            return state;
    }
}