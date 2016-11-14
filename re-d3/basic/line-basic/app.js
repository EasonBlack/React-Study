import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import * as d3 from 'd3';
import AxisY from './app.axis-y';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {x:10,y: 8},
                {x:20,y: 12},
                {x:30,y: 16},
                {x:40,y: 18},
                {x:50,y: 20},
            ]
        }
    }

    render() {
        let width = 600;
        let height = 400;
        let ymax = 20;
        console.log(d3.max(this.state.data.map(d=>d.x)));
        let x = d3.scaleLinear()
            .domain([0,d3.max(this.state.data.map(d=>d.x))])
            .range([0,width]);
        let y = d3.scaleLinear()
            .domain([0,ymax])
            .range([height, 0])

        let yaxis = d3.scaleLinear()
            .domain([0,ymax])
            .range([0,height])

        let line = d3.line()
            //.curve(d3.curveBasis)
            .x((d) => { return x(d.x); })
            .y((d) => { return height - yaxis(d.y); });

        let d = line(this.state.data);

        var area = d3.area()
           // .curve(d3.curveBasis)
            .x(function(d){ return x(d.x)})
            .y0(y(0))
            .y1(function(d){return  height - yaxis(d.y)});

        let area_d = area(this.state.data);

        let textStyle = {
            'fontSize': 11
        };

        return <div>
            <svg width="800" height="600">
                <g transform="translate(0,20)">
                    <path
                        d={d}
                        fill="none"
                        stroke='blue'
                        strokeWidth='2px'
                    />
                    <path
                        d={area_d}
                        fill="lightsteelblue"
                    />
                </g>
                <g transform="translate(20,20)" stroke="grey" style={textStyle}>
                    <AxisY max={ymax} scale={yaxis} num="5" height={height}></AxisY>
                </g>
            </svg>
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))