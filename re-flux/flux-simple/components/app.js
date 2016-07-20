
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import * as AppActions from "../actions/AppAction";
import AppStore from '../stores/AppStore';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            inputText: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSet = this.handleSet.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    componentWillMount() {
        AppStore.on("change", this.getContent);
    }

    getContent() {
        this.setState({
            text: AppStore.getText()
        });
    }

    componentWillUnmount() {
        AppStore.removeListener("change", this.getContent);
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    handleSet() {
        AppActions.setText(this.state.inputText);
    }

    render() {
        return <div>
            <div>{this.state.text}</div>
            <input type="text"
                   value={this.state.inputText}
                   onChange= {this.handleChange}
            />
            <button onClick={this.handleSet}>Click</button>
        </div>;
    }
}

export default App;