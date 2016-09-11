import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import d3 from 'd3';


class Bar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return  <rect fill='steelblue'
              width='25' height={this.props.d * 2}
              x={this.props.i * 30}/>
    }
}

export default Bar;