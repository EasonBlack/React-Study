import React, {Component} from 'react'
import ReactDOM  from 'react-dom';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: 'one'
        }
    }

    render() {
        return (<div>
            This is Page1
        </div>);
    }
}

export default Page1;