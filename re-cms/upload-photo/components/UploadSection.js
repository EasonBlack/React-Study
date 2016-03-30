import React , { Component } from 'react';
import classSet from 'react-classset';
import uuid from 'node-uuid';

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpload : false,
            photo: {},
            temporaryImage: '',
            currentId:  ''
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
                var _src = this.src;
                var _id = uuid.v1();
                canvas.height = _h;
                canvas.width = _w;
                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL('image/png').split(',')[1];
                canvas = null;

                self.setState({
                    temporaryImage: _src,
                    currentId : _id,
                    photo: {
                        id : _id,
                        width: _w,
                        height: _h,
                        screenWidth: window.innerWidth,
                        screenHeight: window.innerHeight,
                        img: dataURL
                    }
                });
            };

            img.src = _URL.createObjectURL(file);
        }
    }

    handleUpload(event) {
        event.preventDefault();
        this.setState({
            isUpload : true
        });
        this.props.upload(this.state.photo)
    }

    addPoint(event) {
        event.preventDefault();
        var _obj = {
            x: event.clientX,
            y: event.clientY
        }
        this.props.addpoint(_obj);
    }

    savePoints() {
        this.props.savepoints({
            id:  this.state.currentId,
            points: this.props.points
        });
    }

    render() {

        var uploadClasses = classSet({
            'upload-section': true,
            'hidden': this.state.isUpload
        });

        var pointUploadClasses =  classSet({
            'upload-section': true,
            'hidden': !this.state.isUpload
        });

        return <div className='upload-section-wrapper'>
            <img className='upload-image' src={this.state.temporaryImage} onClick={this.addPoint.bind(this)}/>

            <div className={uploadClasses}>
                <div className="filewrap">
                    <input type="file" name="file" id="file" accept="image/*" onChange={this.handleChange.bind(this)}/>
                </div>
                <a className='buttonwrap submit'  onClick={this.handleUpload.bind(this)}/>
            </div>
            <div className={pointUploadClasses}>
                <a className='buttonwrap save'   onClick={this.savePoints.bind(this)}/>
            </div>
        </div>
    }
}

export default UploadSection