import React from 'react';
import {hashHistory} from 'react-router'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);

class Daily extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <section>
            <div className="daily__topbar">
                <a className="app__button_default">Canlendar</a>
                <a className="app__button_default">List</a>
            </div>
            <div className="daily__content">
                <BigCalendar
                    selectable
                    events={[]}
                    onSelectSlot={(slotInfo) => {
                    console.log(slotInfo);
                            let _date = moment(slotInfo.start).format('YYYY-MM-DD');
                            hashHistory.push(`/daily/${_date}`);
                    }}
                    views={['month']}
                />
            </div>
        </section>;
    }
}

export default Daily;