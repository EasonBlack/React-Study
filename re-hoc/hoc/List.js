
import React, {Component} from 'react'
import withScroll from './withScroll'

import {initFetch, scrollFetch} from './mockapi'

class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {items} = this.props;
        return <div className='list-wrapper'>
            {
               items && items.map((item,index)=>{
                    return (<div key={index}>{item}</div>)
                })
            }
        </div>
    }

   


}

export default withScroll(List, initFetch, (i)=>scrollFetch(i));