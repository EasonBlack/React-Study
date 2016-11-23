import React, {Component} from 'react'


class Bar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let translate = "translate(" + this.props.i * 30 + ", " + (this.props.height - this.props.d) + ")";
        let translateBack = "translate(" + this.props.i * 30 + ", 0)";
        let translateText = "translate(" + (this.props.i * 30 +12.5) + ", " + (this.props.height + 10) + ")";
        let textStyle = {
            'fontSize': 8
        };
        return <g>
            <rect fill='#D9E4EA'
                  width='25'
                  height={this.props.max}
                  transform={translateBack}
            />
            <rect fill='#47B9C3'
                  width='25'
                  height={this.props.d}
                  transform={translate}
            >
                <title>{this.props.title} : {this.props.hour}</title>
            </rect>
            <text textAnchor="middle"
                  x={this.props.i * 30 + 12.5}
                  y={this.props.height + 10}
                  style={textStyle}>
                {this.props.title}
            </text>
        </g>


    }
}

export default Bar;