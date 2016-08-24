import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class DataBase extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div>
                    <h2>It is Database</h2>
                </div>
                <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataBase);
