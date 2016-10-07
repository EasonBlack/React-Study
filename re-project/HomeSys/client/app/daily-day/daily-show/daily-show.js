import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class DailyShow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return  <ul className="flex__400 daily__list" >
               <li>
                   <span className="daily__item_col">TYPE</span>
                   <span className="daily__item_col">HOUR</span>
                   <span className="daily__item_col">TROPHY</span>
                   <span className="daily__item_col">CONTENT</span>
               </li>
            {
                this.props.list && this.props.list.data.map(function (p, key) {
                    let _typeName = this.props.type.item_type.data.find((d)=> d.id == p.type).name;
                    return <li key={key}>
                        <span className="daily__item_col">{_typeName}</span>
                        <span className="daily__item_col">{p.hour}</span>
                        <span className="daily__item_col">{p.trophy}</span>
                        <span className="daily__item_col">{p.name}</span>
                    </li>
                }.bind(this))
            }
        </ul>
    }

    recodeList(t) {

    }
}

var mapStateToProps = function (state) {
    return {
        type: state.item_type
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyShow)

//export default DailyShow;