import React, {Component} from 'react';

class HomeStep3 extends Component {
    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        console.log(this.props);
        this.props.onConfirm(2);
    }

    render() {
        return <div>
            <div>this is Step3</div>
            <div>
                <button onClick={this.handleConfirm}>Confirm</button>
            </div>
        </div>;
    }
}

export default HomeStep3;