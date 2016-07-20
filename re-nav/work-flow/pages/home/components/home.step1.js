import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions.js';

class HomeStep1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div>this is Step1</div>
            <div>
                <button onClick={()=>this.props.nextStep(2)}>Next</button>
            </div>
        </div>;
    }
}

export default connect(null, actions)(HomeStep1);
//export default HomeStep1;