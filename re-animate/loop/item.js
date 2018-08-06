
import React from 'react'
import  './item.scss'
import classNames from "classnames";

const Item = (props) => {
    let _styles = {
        left: 200 * (props.index - props.current)
    }
    return (
        <div style={_styles}
            className = {'item-wrapper ' +  classNames({current: props.index == props.current})}
            onClick={props.onClick}
        >
            {props.title + props.index} 
        </div>
      );
}

export default Item;
