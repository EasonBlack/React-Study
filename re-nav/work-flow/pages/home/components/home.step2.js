import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions.js';

class HomeStep2 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div>
            <div>this is Step2</div>
            <div>
                <button onClick={()=>this.props.nextStep(3)}>Next</button>
            </div>
        </div>;
    }
}

export default connect(null, actions)(HomeStep2);