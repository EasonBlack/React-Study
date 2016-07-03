import dispatcher from "../dispatcher";

export function setText(text) {
    dispatcher.dispatch({
        type: "SET_TEXT",
        text,
    });
}

export function getText() {
    dispatcher.dispatch({
        type: "GET_TEXT"
    });
}