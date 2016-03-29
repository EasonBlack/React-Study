import React , { Component } from 'react';

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {}
        }
    }

    handleChange(event) {
        var self = this;
        var files = event.target.files;
        var file = files[0];

        if (files && file) {
            var _URL = window.URL || window.webkitURL;
            var img = new Image();
            img.onload = function () {
                var canvas = document.createElement('CANVAS');
                var ctx = canvas.getContext('2d');
                var dataURL;
                var _h = this.height;
                var _w = this.width;
                canvas.height = _h;
                canvas.width = _w;
                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL('image/png').split(',')[1];
                canvas = null;

                self.setState({
                    photo: {
                        width: _w,
                        height: _h,
                        img: dataURL
                    }
                });

            };
            img.src = _URL.createObjectURL(file);
        }
    }

    handleUpload(event) {
        event.preventDefault();
        this.props.upload(this.state.photo)
    }

    render() {
        return <div className='upload-section-wrapper'>
            <div className='upload-section'>
                <div className="filewrap">
                    <input type="file" name="file" id="file" accept="image/*" onChange={this.handleChange.bind(this)}/>
                </div>
                <a className='submitwrap' id="btnSubmit" onClick={this.handleUpload.bind(this)}/>
            </div>
        </div>
    }
}

export default UploadSection