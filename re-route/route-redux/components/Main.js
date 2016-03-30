import React , { Component } from 'react';
import {  Link  } from 'react-router';
import {connect} from 'react-redux';

class Main extends Component {

    render() {
        return  <section>
            {this.props.text}
            <div className="master">
                <ul>
                    <li><Link to={'/user'}>user</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>
            <div>
                {this.props.children}
            </div>
        </section>;
    }
}

var mapStateToProps = function(state){
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return {text : state.text};
};

export default connect(mapStateToProps)(Main);
