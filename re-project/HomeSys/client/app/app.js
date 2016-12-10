import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

    render() {
        return  <section className="flex__row">
            <div className="flex__300 app__leftmenu">
                <ul >
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link to={'/daily'}>Daily</Link></li>
                    <li><Link to={'/book'}>Book</Link></li>
                    <li><Link to={'/series'}>Series</Link></li>
                </ul>
            </div>
            <div className="flex__1 app__rightcontent">
                {this.props.children}
            </div>
        </section>;
    }
}

export default App;