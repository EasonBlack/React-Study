import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {addView1} from '../../redux/actions.js';

class View1 extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.addView1();
    }

    render() {
        return (
            <div>
                <div>
                    <h2>It is View1</h2>
                    <h2>{this.props.view1count}</h2>
                </div>
                <div>
                    <button onClick={this.handleAdd}>ADD</button>
                </div>
            </div>

        )
    }
}

var mapStateToProps = function (state) {
    return { view1count: state.view1count }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators( {addView1} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(View1);
