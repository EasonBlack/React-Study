import React , { Component } from 'react';
import {  Link  } from 'react-router';

class App extends Component {

    render() {
        return  <section>
            xxx
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

export default App;