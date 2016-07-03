import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class AppStore extends EventEmitter {

    constructor() {
        super()
        this.content = {text: ''}
    }

    getText() {
        return this.content.text;
    }

    setText(text) {
        this.content = {
            text
        }

        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case "SET_TEXT":
                this.setText(action.text);
                break;
            case "GET_TEXT":
                this.getText();
                break;
        }
    }

}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;