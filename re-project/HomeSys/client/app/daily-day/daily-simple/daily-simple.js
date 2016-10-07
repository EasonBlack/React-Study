import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../../actions/dailyAction';

class DailySimple extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.addRichItem =  this.addRichItem.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.state = {
            newRichItem: ''
        }
    }

    addRichItem() {
        this.props.insertRichItem({
            type: this.props.type,
            name: this.state.newRichItem
        })
    }

    inputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    selectChange(e) {
        if(e.target.value) {
            this.props.selectRichItem(e.target.value);
        } else {
            this.props.selectRichItem('');
        }
    }

    render() {
        return  <div className="flex__1 daily__section">
            <div className="daily__new-content">
                <input className="input___size_medium" onChange={this.inputChange} name="newRichItem" value={this.state.newRichItem}/>
                <a className="app__button_default" onClick={this.addRichItem}>NEW</a>
            </div>
           <select
               onChange={this.selectChange}
               className="daily__simple-select">
               <option></option>
               {this.props.daily.rich_item_list && this.props.daily.rich_item_list.data.map((o, i) => {
                   return <option key={i} value={o.id}>{o.name}</option>;
               })}
           </select>
        </div>;
    }
}


var mapStateToProps = function (state) {
    return {
        daily: state.daily
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(dailyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DailySimple)