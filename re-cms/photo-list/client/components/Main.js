import React , { Component } from 'react';
import {  Link  } from 'react-router';
import {connect} from 'react-redux';

class Main extends Component {
    render() {
        return  <section className="container">
            <div className="master">
                <ul className="menu-list">
                    <li><Link to={'/list'}>List</Link></li>
                    <li><Link to={'/photo'}>Photo</Link></li>
                </ul>
            </div>
            <div className='route-view wholepage '>
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
