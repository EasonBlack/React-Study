import React , { Component } from 'react'
import {connect} from 'react-redux'
import ImagePoint from './ImagePoint.js'
import classSet from 'react-classset';

class List extends Component {

    constructor(props) {
        super(props);
        this.props.route.actions.getPhotos();
        this.state = {
            bigDisplayFile: ''
        }
    }

    photoShowDetail(photo, event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            bigDisplayFile: photo.file,
            currentPhoto: photo
        })
    }

    cancelBigPhoto() {
        this.setState({
            bigDisplayFile: ''
        })
    }

    render() {

        var OrignPhotoClass = classSet({
            'hidden': this.state.bigDisplayFile =='' ,
            'show-big-image': this.state.bigDisplayFile != ''
        });

        var _current= {};
        if(this.state.currentPhoto) {
            _current = {
                points : this.state.currentPhoto.points,
                w : this.state.currentPhoto.w,
                h : this.state.currentPhoto.h,
                screenWidth : this.state.currentPhoto.screenWidth,
                screenHeight : this.state.currentPhoto.screenHeight,
            }
        }

        var self = this;
        return (
            <div className="photo-list wholepage" onClick={this.cancelBigPhoto.bind(this)}>
                {
                    this.props.photos && this.props.photos.map(function (photo) {

                        return (<div key={photo.id}>
                            <img className='single-image' src={photo.file}
                                 onClick={self.photoShowDetail.bind(self, photo)} />
                        </div>)
                    }.bind(this))
                }
                <div className="wholepage big-image-wrapper"  >
                    <div className={OrignPhotoClass}>
                        <img  src={self.state.bigDisplayFile} />
                        <ImagePoint points={_current.points}
                                    w={_current.w} h={_current.h}
                                    screenWidth={_current.screenWidth}
                                    screenHeight={_current.screenHeight}/>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = function (state) {
    return state;
};

export default connect(mapStateToProps)(List);