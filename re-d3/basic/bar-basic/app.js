import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import d3 from 'd3';
import Bar from './app.bar';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [12, 14, 8]
        }
    }

    render() {
        return <div>
            <h4>{this.state.data}</h4>
            <svg width="800" height="600">
                <g>
                    {this.state.data.map((d, i) => (
                        <Bar d={d} i={i} key={i} />
                    ))}
                </g>
            </svg>
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))