import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import * as d3 from 'd3';
import Bar from './app.bar';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [12, 14, 8]
        }
    }


    render() {

        let _scale = d3.scaleLinear()
            .domain([0, d3.max(this.state.data)])
            .range([10, 280]);

        return <div>
            <h4>XXXX</h4>
            <svg width="800" height="600">
                <g>
                    { this.state.data.map((d, i)=> {
                        let _props = {
                            d: _scale(d),
                            i: i,
                            key: i,
                            height:600
                        }
                        return <Bar {..._props}/>
                    })}

                </g>
            </svg>
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))