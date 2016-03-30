import React , { Component } from 'react';
import {  Link  } from 'react-router';

class Main extends Component {
    constructor(props) {
        console.log('first:', props);
        super(props);
        console.log('second:', props);
    }

    render() {
        return  <section>
            {this.props.route.textdisplay}
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

export default Main;