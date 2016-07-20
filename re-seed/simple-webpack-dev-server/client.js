import React, {Component} from 'react';
import ReactDOM  from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'xxxx'
        }

    }

    render() {
        return <div>
            {this.state.data}
        </div>;
    }
}


ReactDOM.render((
    <App/>
), document.getElementById('app'))