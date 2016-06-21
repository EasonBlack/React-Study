
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return <div>
            <input value = {this.state.data} onChange = {this.updateState.bind(this)}
                ref = "myInput"></input>
            <button onClick = {this.clearInput.bind(this)}>CLEAR</button>
            <h4>{this.state.data}</h4>
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))