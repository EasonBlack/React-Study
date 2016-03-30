import React , { Component } from 'react';

class User extends Component {
    render() {
        console.log(this.props.route);
        return (
            <div>
                <h2>It is user view</h2>
                <h2>{this.props.route.text}</h2>
            </div>
        )
    }
}

export default User;