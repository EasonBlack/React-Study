import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class ProjectFeed extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
               This is Feed
            </div>

        )
    }
}

var mapStateToProps = function (state) {
    return {}
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFeed);
