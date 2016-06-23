import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import LeftMenu from './leftmenu'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'xxxxx'
        }
    }

    render() {
        return <div className='wrapper__min-height_100 flex__row wrapper__min-height_100'>
            <LeftMenu></LeftMenu>
            <div className='flex__row_1'>
                {this.props.children}
            </div>
        </div>;
    }
}

export default App;