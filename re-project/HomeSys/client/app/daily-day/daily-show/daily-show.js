import React from 'react'

class DailyShow extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);
    }

    render() {
        return  <ul className="flex__400 daily__list" >
            {
                this.props.list && this.props.list.data.map(function (p, key) {
                    return <li key={key}>
                        <span className="daily__item_index">{key + 1}</span>
                        <span className="daily__item_name">{p.content}</span>
                        <span className="daily__item_hour">{p.hour}</span>
                    </li>
                }.bind(this))
            }
        </ul>
    }
}

export default DailyShow;