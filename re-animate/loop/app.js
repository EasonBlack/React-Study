
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import Item from './item';
import './app.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           items : [
               {id:1, name:'aaaa'},
               {id:2, name:'bbbb'},
               {id:3, name:'cccc'},
               {id:4, name:'dddd'}
           ]
        }
    }

    clickHandle() {
        let [_first, ..._last] = this.state.items;
        let _items =[..._last, _first];
        this.setState({items: _items});
    }

    render() {
        return  <div className='container'>
            <div className='play-wrapper'>
                <div className='play-path' onClick={this.clickHandle.bind(this)}>
                    {this.state.items.map( (item, index) => <Item title={item.name} key={item.id} index={index} />)}   
                </div>
            </div>
        </div>
    }


}

ReactDOM.render((
    <App />
), document.getElementById('app'))