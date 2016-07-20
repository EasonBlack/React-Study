import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {addView2} from '../../redux/actions.js';


class View2 extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.actions.addView2();
    }

    render() {
        return (
            <div>
                <div>
                    <h2>It is View2</h2>
                    <h2>{this.props.view2.view2count}</h2>
                </div>
                <div>
                    <button onClick={this.handleAdd}>ADD</button>
                </div>
            </div>

        )
    }
}

var mapStateToProps = function (state) {
    return state
};

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators( {addView2} , dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(View2);


