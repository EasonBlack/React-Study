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
        return <div className='flex__row wrapper__min-height_100'>
            <LeftMenu></LeftMenu>
            <div className='flex__row_1'>
                {this.state.data}
            </div>
        </div>;
    }
}

export default App;