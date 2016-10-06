import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../actions/dailyList';
import globalActions from '../../actions/globalAction';
import DailyShow from './daily-show/daily-show';
import DailyForm from './daily-form/daily-form';

class DailyDay extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.props.fetchByDate(this.props.params.date);
        this.props.fetchItemType();
    }

    render() {
        console.log(this.props.daily.daily_list);
        return <div>
            <div className="flex__row">
                <DailyShow list={this.props.daily.daily_list}></DailyShow>
                <DailyForm date={this.props.params.date}></DailyForm>
            </div>
        </div>;
    }
}

var mapStateToProps = function (state) {
    return {
        daily: state.daily,
        type: state.item_type
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(Object.assign({}, dailyActions, globalActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyDay);