import React from 'react'
import { Link } from 'react-router'

class DailySimple extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return  <div className="flex__1">
            {this.props.type}
        </div>;
    }
}

export default DailySimple;