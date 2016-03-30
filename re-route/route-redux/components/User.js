import React , { Component } from 'react';

class User extends Component {
    constructor(props) {
        console.log('first:', props);
        super(props);
        console.log('second:', props);

    }

    render() {
        console.log('User:',this.props);
        return (
            <div>
                <h2>It is user view</h2>
                <h2>{this.props.route.textdisplay}</h2>
            </div>
        )
    }
}

export default User;