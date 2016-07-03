import React from 'react'
import { Link, browserHistory } from 'react-router'

class Main extends React.Component {

    render() {
        return  <section>
            <div className="master">
                <ul>
                    <li><Link to={'/view1'}>VIEW1</Link></li>
                    <li><Link to={'/view2'}>VIEW2</Link></li>
                </ul>
            </div>
            <div>
                {this.props.children}
            </div>
        </section>;
    }
}

export default Main;
