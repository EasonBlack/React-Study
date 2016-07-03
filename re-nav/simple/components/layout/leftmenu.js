import React, {Component} from 'react'
import ReactDOM  from 'react-dom';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {name: 'aaaa'},
                {name: 'bbbb'},
                {name: 'cccc'},
                {name: 'dddd'}
            ]
        }
    }


    render() {
        return <div className='flex__row_200 left-menu__bg_blue left-menu__height'>
            <ul>
                {this.state.menus.map(function (menu) {
                    return <li className='left-menu__item'>{menu.name}</li>
                })}
            </ul>
        </div>;
    }
}

export default LeftMenu;
