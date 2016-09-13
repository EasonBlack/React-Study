import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import * as d3 from 'd3';


class Pie extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.d);
    }

    render() {
        return <path
            d={this.props.d}
            fill={this.props.color}
            />
    }
}

export default Pie;