
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import Testcom from './Testcom';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            msg: 'aaaaa'
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
            <input value = {this.state.data} onChange = {(e)=>this.updateState(e)}
                ref = "myInput"></input>
            <button onClick = {this.clearInput.bind(this)}>CLEAR</button>
            <h4>{this.state.data}</h4>
            <Testcom value={this.state.msg} onClick={()=>alert(123)} />
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))