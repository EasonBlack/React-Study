
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import Item from './item';
import './app.scss'
import classNames from "classnames";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           items : [
               {id:1, name:'aaaa'},
               {id:2, name:'bbbb'},
               {id:3, name:'cccc'},
               {id:4, name:'dddd'}
           ],
           currentPos: 0
        }
    }

    clickHandle() {
        let _current = this.state.currentPos
        if(_current != this.state.items.length - 1) {
            this.setState({currentPos: _current + 1});
        } else {
            this.setState({currentPos: _current - 1});
        }
    }

    itemSelect(index) {
        this.setState({currentPos:index}, ()=>{console.log(123)});
    }

    render() {
        return  <div className='container'>
            <div className='play-wrapper'>
                <div className='play-path' onClick={this.clickHandle.bind(this)}>
                    {this.state.items.map( (item, index) => 
                        <Item title={item.name} current={this.state.currentPos} key={item.id} index={index} 
                        onClick={(e)=> {           
                            e.preventDefault();
                            e.stopPropagation();
                            this.itemSelect(index)
                        }}/>
                    )}   
                </div>
                <div className='play-nav' >
                    {this.state.items.map( (item, index) => 
                    <div key={item.id} className={classNames({current: index==this.state.currentPos})}  
                         onClick={(e)=> {           
                            e.preventDefault();
                            e.stopPropagation();
                            this.itemSelect(index)
                        }}
                    />
                    )}   
                </div>
            </div>
        </div>
    }


}

ReactDOM.render((
    <App />
), document.getElementById('app'))