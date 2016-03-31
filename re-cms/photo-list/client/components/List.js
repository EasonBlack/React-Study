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
            bigDisplayFile: photo.file
        })
    }

    cancelBigPhoto() {
        this.setState({
            bigDisplayFile: ''
        })
    }

    render() {

        var OrignPhotoClass = classSet({
            'hidden': this.state.bigDisplayFile == '',
            'show-big-image': this.state.bigDisplayFile != ''
        });
        console.log(this.props.photos);

        var self = this;
        return (
            <div className="photo-list" onClick={this.cancelBigPhoto.bind(this)}>
                {
                    this.props.photos && this.props.photos.map(function (photo) {
                        return (<div key={photo.id}>
                            <img className='single-image' src={photo.file}
                                 onClick={self.photoShowDetail.bind(self, photo)}/>
                            <img className={OrignPhotoClass} src={this.state.bigDisplayFile}>
                                <ImagePoint points={photo.points}/>
                            </img>

                        </div>)
                    }.bind(this))
                }
            </div>
        )
    }
}

var mapStateToProps = function (state) {
    return state;
};

export default connect(mapStateToProps)(List);