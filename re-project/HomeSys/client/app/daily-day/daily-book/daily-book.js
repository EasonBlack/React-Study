import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../../actions/dailyAction';

class DailyBook extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.inputChange = this.inputChange.bind(this);
        this.addSeriesItem = this.addSeriesItem.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.state = {
            newBookName: '',
            newBookAuthor: '',
            item_time: 0,
            item_id: null
        }
    }

    addBookItem() {
        this.props.insertRichItem({
            type: this.props.type,
            name: this.state.newBookName,
            author: this.state.newBookAuthor
        })
    }

    inputChange(e) {
        this.setState({[e.target.name]: e.target.value}, ()=>{
            this.props.setSeriesItem({
                item_episode: this.state.item_episode,
                item_id: this.state.item_id
            })
        });
    }

    selectChange(e) {
        this.setState({[e.target.name]: e.target.value}, ()=>{
            this.props.setSeriesItem({
                item_episode: this.state.item_episode,
                item_id: this.state.item_id
            })
        });
    }


    render() {
        return  <div className="flex__1 daily__section">
            <div className="daily__new-content">
                <div>
                    <input className="input___size_medium" onChange={this.inputChange} name="newBookName" value={this.state.newBookName}/>
                </div>
                <div>
                    <input className="input___size_medium" onChange={this.inputChange} name="newBookAuthor" value={this.state.newBookAuthor}/>
                </div>
                <div>
                    <a className="app__button_default" onClick={this.addBookItem}>NEW</a>
                </div>

            </div>
            <select
                onChange={this.selectChange}
                name="item_id"
                className="daily__simple-select">
                <option></option>
                {this.props.daily.rich_item_list && this.props.daily.rich_item_list.data.map((o, i) => {
                    return <option key={i} value={o.id}>{o.name}</option>;
                })}
            </select>
            <div className="input__row daily__series_episode">
                <input className="input___size_small" value={this.state.item_time}
                       onChange={this.inputChange} name="item_time"/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyBook)