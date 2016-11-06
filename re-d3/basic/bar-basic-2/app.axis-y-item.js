import React, {Component} from 'react'

class AxisYItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _transform = `translate(0, ${this.props.height - this.props.scale})`
        return <g transform={_transform}>
            <line x2="-2" y2="0"></line>
            <text dy=".32em" x="-18" y="0" >{this.props.title}</text>
        </g>
    }
}

export default AxisYItem;