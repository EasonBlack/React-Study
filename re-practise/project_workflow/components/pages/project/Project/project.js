import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Link, browserHistory } from 'react-router'

class Project extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="flex__row">
                <div className="flex__300">
                    <div><Link to={`/project/1/feed`}>Feed</Link></div>
                </div>
                <div className="flex__1">
                    {this.props.children}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Project);
