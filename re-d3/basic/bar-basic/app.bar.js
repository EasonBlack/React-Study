import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import * as d3 from 'd3';


class Bar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var translate = "translate("+ this.props.i * 30 +", " + (this.props.height - this.props.d) + ")";

        return <rect fill='steelblue'
                     width='25'
                     height={this.props.height}
                     transform={translate}
                    />
    }
}

export default Bar;