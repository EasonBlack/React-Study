import React , { Component } from 'react';

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img : {}
        }
    }

    handleChange(event) {
        var self = this;
        var files = event.target.files;
        var file = files[0];

        if (files && file) {
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function(readerEvt) {
                self.setState({
                    img:  btoa(readerEvt.target.result)
                });
            };
        }
    }

    handleUpload(event) {
        event.preventDefault();
        this.props.upload(this.state.img)
    }

    render() {
        return  <div>
               <input type="file" name="file" id="file" accept="image/*" onChange={this.handleChange.bind(this)}   />
               <input type="submit" id="btnSubmit" onClick={this.handleUpload.bind(this)} />
            </div>
    }
}

export default UploadSection