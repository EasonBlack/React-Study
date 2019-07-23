
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'xxxxx'
        }

    }

    render() {
        return <div>
           {this.state.data}
        </div>;
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))