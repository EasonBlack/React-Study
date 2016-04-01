
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import  'react-datepicker/dist/react-datepicker.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange.bind(this)}/>;
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'))