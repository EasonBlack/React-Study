import React from 'react';
import {hashHistory} from 'react-router'
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../actions/dailyAction';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);

class Daily extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.fetchMonth({year: new Date().getFullYear(), month: new Date().getMonth() + 1});
    }


    render() {
        return <section>
            <div className="daily__topbar">
                <Link className="app__button_default" to={'/daily/daily-calendar'}>Canlendar</Link>
                <Link className="app__button_default" to={'/daily/daily-list'}>List</Link>
            </div>
            <div className="daily__content">
                {this.props.children}
                <BigCalendar
                    selectable
                    events={this.props.daily.month_list || []}
                    onSelectSlot={(slotInfo) => {
                        console.log(slotInfo);
                        let _date = moment(slotInfo.start).format('YYYY-MM-DD');
                        hashHistory.push(`/daily/${_date}`);
                    }}
                    views={['month', 'week']}
                />
            </div>
        </section>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Daily)

