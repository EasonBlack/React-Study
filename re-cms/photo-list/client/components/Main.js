import React , { Component } from 'react';
import {  Link  } from 'react-router';
import {connect} from 'react-redux';

class Main extends Component {
    render() {
        return  <section className="container">
            <div className="master">
                <ul>
                    <li><Link to={'/list'}>List</Link></li>
                </ul>
            </div>
            <div className='route-view'>
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
