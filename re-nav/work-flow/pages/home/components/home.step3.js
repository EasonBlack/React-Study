import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions.js';

class HomeStep3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div>this is Step3</div>
            <div>
                <button onClick={()=>this.props.confirm()}>Confirm</button>
            </div>
        </div>;
    }
}

export default connect(null, actions)(HomeStep3);