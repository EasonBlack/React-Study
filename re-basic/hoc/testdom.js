
import React, {Component} from 'react'


class Testdom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div>{this.props.msg}</div>
        </div>
    }
}

export default Testdom;