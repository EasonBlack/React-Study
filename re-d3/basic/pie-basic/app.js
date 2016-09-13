import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import * as d3 from 'd3';
import Pie from './app.pie';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [10,50,100]
        }
    }


    render() {

        let _arc = d3.arc()
            .innerRadius(100)
            .outerRadius(200);

        let _pie = d3.pie()
            .value((d) => d);
        console.log(_pie(this.state.data))
        let _color = d3.scaleOrdinal()
            .range(['red','blue','orange'])

        return <div>
            <h4>XXXX</h4>
            <svg width="800" height="600">
                <g  transform='translate(300,300)'>
                    { _pie(this.state.data).map((d, i)=> {
                        let _props = {
                            d: _arc(d),
                            color: _color(d.value),
                            i: i,
                            key: i
                        }
                        return <Pie {..._props}/>
                    })}

                </g>
            </svg>
        </div>
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))