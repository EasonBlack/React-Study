import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../actions/dailyAction';
import globalActions from '../../actions/globalAction';
import DailyShow from './daily-show/daily-show';
import DailyForm from './daily-form/daily-form';
import DailySimple from './daily-simple/daily-simple'
import DailyRich from './daily-rich/daily-rich'
import DailySeries from './daily-series/daily-series'
import DailyBook from './daily-book/daily-book'

class DailyDay extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.props.fetchByDate(this.props.params.date);
        this.props.fetchItemType();
    }

    renderItemSection() {
        if (this.props.daily.select_daily) return;
        let itemSection = null;
        if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'simple') {
            itemSection = <DailySimple type={this.props.daily.selectedCategory.id}/>;
        } else if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'rich') {
            itemSection = <DailyRich type={this.props.daily.selectedCategory.id}/>;
        } else if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'book') {
            itemSection = <DailyBook type={this.props.daily.selectedCategory.id}/>;
        } else if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'series') {
            itemSection = <DailySeries type={this.props.daily.selectedCategory.id}/>;
        }
        return itemSection;
    }

    render() {
        let itemSection = this.renderItemSection();
        return <div>
            <div className="flex__row">
                <DailyShow list={this.props.daily.daily_list}></DailyShow>
                <DailyForm date={this.props.params.date}></DailyForm>
                {itemSection}
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