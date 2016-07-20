import React, {Component} from 'react';

class HomeStep1 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleNextStep = this.handleNextStep.bind(this);
    }

    handleNextStep() {
        console.log(this.props);
        this.props.onNextStep(2);
    }

    render() {
        return <div>
            <div>this is Step1</div>
            <div>
                <button onClick={this.handleNextStep}>Next</button>
            </div>
        </div>;
    }
}

export default HomeStep1;