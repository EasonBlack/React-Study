import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import {Items} from './a.component';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'xxxx'
        }

    }

    render() {
        return <div>
             <Items>
                 <div>aaaa</div>
                 <div>bbbb</div>
             </Items>
        </div>;
    }
}


ReactDOM.render((
    <App/>
), document.getElementById('app'))