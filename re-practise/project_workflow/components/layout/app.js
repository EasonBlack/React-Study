import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

    render() {
        return  <section>
            <div className="header__box ">
                <ul className="header__wrapper flex__row text__balance" >
                    <li><Link to={'/projectlist'}>Project</Link></li>
                    <li><Link to={'/database'}>Database</Link></li>
                </ul>
            </div>
            <div>
                {this.props.children}
            </div>
        </section>;
    }
}

export default App;