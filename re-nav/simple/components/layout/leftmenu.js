import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import {  Link  } from 'react-router';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {title: 'Page1', name: 'page1'},
                {title: 'Page2', name: 'page2'},
            ]
        }
    }


    render() {
        return <div className='flex__row_200 left-menu__bg_blue left-menu__height'>
            <ul>
                <li className='left-menu__item'><Link to='page1'>Page 1</Link></li>
                <li className='left-menu__item'><Link to='page2'>Page 2</Link></li>
            </ul>
        </div>;
    }
}

export default LeftMenu;
