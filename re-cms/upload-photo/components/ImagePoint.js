import React , { Component } from 'react';

class ImagePoint extends Component {
    render() {
        return <div>
            {
                this.props.points.map(function (point) {
                    var _style = {
                        top: point.y,
                        left: point.x
                    }
                    return (<div className='image-point'  key={point.id} style={_style} ></div>)
                }.bind(this))
            }
        </div>
    }

}

export default ImagePoint