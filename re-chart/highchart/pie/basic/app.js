import React, {Component} from 'react'
import ReactDOM  from 'react-dom';

import DonutChart from './app.donut'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieData: [{name: "Firefox",y: 6},{name: "MSIE",y: 4},{name: "Safari",y: 4},{name: "Opera",y: 1},{name: "Chrome",y: 7}]
        }

    }

    render() {
        return <div>
            <DonutChart data = {this.state.pieData}/>
        </div>;
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))