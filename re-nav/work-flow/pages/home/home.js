import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import HomeStep1 from './components/home.step1.js';
import HomeStep2 from './components/home.step2.js';
import HomeStep3 from './components/home.step3.js';

import * as actions from '../../redux/actions.js';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        console.log(this.props);
    }

    handleNext(i) {
        this.props.nextStep(i);
    }

    handleConfirm() {
        this.props.confirm();
    }

    render() {
        let _stepComponent;
        switch (this.props.home.step) {
            case 1:
                _stepComponent = <HomeStep1 onNextStep={this.handleNext}/>
                break;
            case 2:
                _stepComponent = <HomeStep2 onNextStep={this.handleNext}/>
                break;
            case 3:
                _stepComponent = <HomeStep3 onConfirm={this.handleConfirm}/>
                break;
        }

        return <div>
            this is Home
            {_stepComponent}
        </div>;
    }
}

var mapStateToProps = function (state) {
    return state
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);