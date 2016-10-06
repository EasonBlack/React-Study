import React from 'react'
import {Link} from 'react-router'

class DailyForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            type: null,
            hour: 0,
            trophy: 0,
            content: null
        };
        this.inputChange = this.inputChange.bind(this);
        this.getValues = this.getValues.bind(this);
    }

    inputChange( e) {
        this.setState({[e.target.name]: e.target.value});
    }

    getValues(e) {
        console.log(this.state);
    }

    render() {
        return <div className="flex__1 daily__form">
            <div className="input__row">
                <span className="input__label">Type</span>
                <select/>
            </div>
            <div className="input__row">
                <span className="input__label">Hour</span>
                <input  value = {this.state.hour} onChange={this.inputChange} name="hour" />
            </div>
            <div className="input__row">
                <span className="input__label">Trophy</span>
                <input   value = {this.state.trophy}  onChange={this.inputChange} name="trophy"  />
            </div>
            <div className="input__row">
                <span className="input__label">Content</span>
                <input />
            </div>
            <div className="input__row">
               <a className="app__button_default" onClick={this.getValues}>Add</a>
            </div>
        </div>;
    }
}

export default DailyForm;