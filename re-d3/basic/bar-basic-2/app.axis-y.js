import React, {Component} from 'react'
import AxisYItem from './app.axis-y-item';

class AxisY extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _axis = [];
        console.log(this.props);
        let _one = this.props.max / this.props.num;
        console.log(_one);
        for (let i = 0; i < this.props.num; i++) {
            _axis.push(0 + i * _one);
        }
        _axis.push(this.props.max);
        console.log(_axis);
      
        return <g>
            {
                _axis.map((d, i)=> {
                    let _props = {
                        title: d,
                        scale : this.props.scale(d),
                        height: this.props.height
                    }
                    return <AxisYItem {..._props}/>
                })
            }
            <path class="domain" d="M0,0H0V250"></path>
        </g>
    }
}

export default AxisY;