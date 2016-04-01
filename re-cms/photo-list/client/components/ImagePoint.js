import React , { Component } from 'react';

class ImagePoint extends Component {

    calculate(point, w, h, screenWidth, screenHeight) {
       var x = (point.x * w) / screenWidth;
       var y = (point.y * h) / screenHeight;
        return {
            x: x,
            y: y
        }
    }

    render() {
        return <div>
            {
                this.props.points && this.props.points.map(function (point) {
                    var _point = this.calculate(point, this.props.w, this.props.h, this.props.screenWidth, this.props.screenHeight)
                    var _style = {
                        top: _point.y,
                        left: _point.x
                    }
                    return (<div className='image-point'  key={point._id} style={_style} ></div>)
                }.bind(this))
            }
        </div>
    }

}

export default ImagePoint