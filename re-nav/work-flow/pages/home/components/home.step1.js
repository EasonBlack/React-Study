import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setInfo,nextStep} from '../../../redux/actions.js';

class HomeStep1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {info1} = this.props.info;

        return <div>
            <div>this is Step1</div>
            <div><input type='text' value={info1} onChange={(e)=>this.handleChange(e)}/></div>
            <div>
                <button onClick={()=>this.props.nextStep(2)}>Next</button>
            </div>
        </div>;
    }

    handleChange(e) {
        this.props.setInfo({info1: e.target.value})
    }

}


export default connect((state)=> ({
    info: state.home.info
}), {setInfo, nextStep})(HomeStep1);
