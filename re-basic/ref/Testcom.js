
import React from 'react'

const Testcom = (props) => {
    return (
        <button  onClick={props.onClick}>
          {props.value}
        </button>
      );
}

export default Testcom;

