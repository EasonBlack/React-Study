import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions.js';

class HomeStep3 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return <div>
            <div>this is Step3</div>
            <div>
                <button onClick={()=>this.props.confirm(this.props.home.info)}>Confirm</button>
            </div>
        </div>;
    }
}

var mapStateToProps = function (state) {
    return state
};


export default connect(mapStateToProps, actions)(HomeStep3);