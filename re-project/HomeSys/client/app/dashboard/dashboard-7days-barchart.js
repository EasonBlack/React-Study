import React from 'react'
import * as d3 from 'd3'
import Bar from './dashboard-7days-barchart-bar';

class Chart7DaysBarChart extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        console.log(this.props.rows);
        let styles = {
            svg: {
                width: '100%',
                height: '100%'
            }
        }
        let _max = d3.max(this.props.rows.map(d=>parseFloat(d.hour)));
        console.log(_max);
        let _scale = d3.scaleLinear()
            .domain([0, 40])   //max = 40
            .range([0, 120]); //max bar height = 120

        return <svg  x="0"  y="0"  height="100%" viewBox="0 0 400 150"
                     preserveAspectRatio="none" version="1.1">
            <g transform="translate(30,10)">
                { this.props.rows.map((d, i)=> {
                    let _props = {
                        d: _scale(d.hour),
                        hour: d.hour,
                        i: i,
                        key: i,
                        height: 120,
                        max: 120,
                        title: d.typename
                    }
                    return <Bar {..._props}/>
                })}
            </g>
        </svg>
    }

}

export default Chart7DaysBarChart