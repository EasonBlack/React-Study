import React, {Component} from 'react';
import {connect} from 'react-redux';

import HomeStep1 from './components/home.step1.js';
import HomeStep2 from './components/home.step2.js';
import HomeStep3 from './components/home.step3.js';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _stepComponent;
        switch (this.props.home.step) {
            case 1:
                _stepComponent = <HomeStep1 />
                break;
            case 2:
                _stepComponent = <HomeStep2/>
                break;
            case 3:
                _stepComponent = <HomeStep3/>
                break;
        }

        return <div>
            this is Home
            {_stepComponent}
            <div>
                {JSON.stringify(this.props.home.info, null, 2) }
            </div>
        </div>;
    }
}

var mapStateToProps = function (state) {
    return state
};

export default connect(mapStateToProps, null)(HomePage);
