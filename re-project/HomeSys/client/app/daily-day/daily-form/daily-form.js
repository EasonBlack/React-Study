import React from 'react'
import {Link} from 'react-router'

class DailyForm extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className="flex__1 daily__form">
            <div className="input__row">
                <span className="input__label">Type</span>
                <select/>
            </div>
            <div className="input__row">
                <span className="input__label">Hour</span>
                <input />
            </div>
            <div className="input__row">
                <span className="input__label">Trophy</span>
                <input />
            </div>
            <div className="input__row">
                <span className="input__label">Content</span>
                <input />
            </div>
            <div className="input__row">
               <a className="app__button_default">Add</a>
            </div>
        </div>;
    }
}

export default DailyForm;