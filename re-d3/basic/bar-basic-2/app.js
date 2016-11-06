import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import * as d3 from 'd3';
import Bar from './app.bar';
import AxisY from './app.axis-y';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //data2: [12, 14, 8, 6, 20, 5, 17],
            data: [
                {data: '11-01',num: 12},
                {data: '11-02',num: 14},
                {data: '11-03',num: 8},
                {data: '11-04',num: 6},
                {data: '11-05',num: 20},
                {data: '11-06',num: 5},
                {data: '11-07',num: 17},
            ]
        }
    }


    render() {
        let _height = 250;
        let _max = d3.max(this.state.data.map(d=>d.num));
        let _scale = d3.scaleLinear()
            .domain([0, _max])
            .range([0, _height]);
        let textStyle = {
            'fontSize': 11
        };


        return <div className="chart__container">
            <svg width="300" height="290">
                <g transform="translate(30,10)">
                    { this.state.data.map((d, i)=> {
                        let _props = {
                            d: _scale(d.num),
                            i: i,
                            key: i,
                            height: _height,
                            max: _scale(_max),
                            title: d.data
                        }
                        return <Bar {..._props}/>
                    })}
                </g>
                <g transform="translate(20,10)" stroke="grey" style={textStyle}>
                    <AxisY max={_max} scale={_scale} num="5" height={_height}></AxisY>
                </g>

            </svg>
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))