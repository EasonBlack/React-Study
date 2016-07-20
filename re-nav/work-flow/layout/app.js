import React, {Component} from 'react';
import HomePage from '../pages/home/home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'xx x xx'
        }

    }

    render() {
        return <div>
            <div>{this.state.data}</div>
            <HomePage></HomePage>
        </div>;
    }
}

export default App;