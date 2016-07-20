import React, {Component} from 'react';

class HomeStep2 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleNextStep = this.handleNextStep.bind(this);
    }


    handleNextStep() {
        console.log(this.props);
        this.props.onNextStep(3);
    }

    render() {
        return <div>
            <div>this is Step2</div>
            <div>
                <button onClick={this.handleNextStep}>Next</button>
            </div>
        </div>;
    }
}

export default HomeStep2;