
import React from 'react'
import  './Testcom.css'

const Testcom = (props) => {

    return (
        <div className='d'>
          <button  onClick={props.onClick}>
            {props.value}
          </button>
        </div>
      );
}

export default Testcom;

