
import React from 'react'
import  './item.scss'

const Item = (props) => {
    let _styles = {
        position: 'absolute',
        left: 200 * (props.index -1) ,
        transition: 'left 1s ease-in'
    }
    return (
        <div className='item-wrapper' style={_styles}>
            {props.title + props.index} 
        </div>
      );
}

export default Item;
