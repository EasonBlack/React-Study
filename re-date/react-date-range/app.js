
import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import { Calendar, DateRangePicker , DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            startDate :  new Date(),
            endDate:  new Date()
        }
    }

    handleSelect(date){
        console.log(date);
		this.setState({
            startDate: date.selection.startDate,
            endDate: date.selection.endDate
        })
	}
	render(){
		const selectionRange = {
			startDate: this.state.startDate,
			endDate: this.state.endDate,
			key: 'selection',
		}
		return (
            <React.Fragment>
            <div>
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={this.handleSelect.bind(this)}
			/>
            </div>
            <div>
            <DateRange
				ranges={[selectionRange]}
                onChange={this.handleSelect.bind(this)}
                months={2}
                direction="horizontal"
                showSelectionPreview={false}
                showPreview={true}    //选中又标识，如果false是操作结束才出现标识                  
                showDateDisplay={false}
			/>
            </div>
            </React.Fragment>
            
		)
	}
}

ReactDOM.render((
    <App />
), document.getElementById('app'))