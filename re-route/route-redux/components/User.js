import React , { Component } from 'react';
import {connect} from 'react-redux';

class User extends Component {

    render() {
        console.log('User:',this.props);
        return (
            <div>
                <h2>It is user view</h2>
                <h2>{this.props.text}</h2>
            </div>
        )
    }
}

var mapStateToProps = function(state){
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return state;
};

export default connect(mapStateToProps)(User);