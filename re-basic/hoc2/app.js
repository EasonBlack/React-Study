
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import Testdom from './testdom';
import withConsole from './withConsole';

let  TestdomWithConsole = withConsole(Testdom);

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
           <TestdomWithConsole />
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))