import React, {Component} from 'react'


class Bar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let translate = "translate(" + this.props.i * 30 + ", " + (this.props.height - this.props.d) + ")";
        let translateBack = "translate(" + this.props.i * 30 + ", 0)";
        let translateText = "translate(" + this.props.i * 30 + ", " + (this.props.height + 20) + ")";
        let textStyle = {
            'fontSize': 11
        };
        let textRotate = "rotate(15, " + this.props.i*30 + " 270)"

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
            />
            <text x={this.props.i*30 - 4}
                  y='263'
                  transform={textRotate}
                  style={textStyle}>
                {this.props.title}</text>
        </g>


    }
}

export default Bar;