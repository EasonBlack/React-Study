import React, {Component} from 'react';

export class Items extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2>Hello</h2>
            {this.props.children}
            <div>Footer</div>
        </div>;
    }
}