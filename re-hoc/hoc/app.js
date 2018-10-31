
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import List from './List';



class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
           <List  />
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))