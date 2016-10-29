import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../../actions/dailyAction';

class DailyShow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId : 0
        }
    }

    selectItem(item) {
        this.props.getDaily(item);
        this.setState({
            selectedId: item.id
        })
    }

    render() {
        return <ul className="flex__500 daily__list">
            <li>
                <span className="daily__item_col">TYPE</span>
                <span className="daily__item_col">HOUR</span>
                <span className="daily__item_col">TROPHY</span>
                <span className="daily__item_col-long">CONTENT</span>
            </li>
            {
                this.props.list && this.props.list.data.map(function (p, key) {
                    let _typeName = this.props.type.item_type.data.find((d)=> d.id == p.type).name;
                    return <li key={key}
                               className={`${this.state.selectedId==p.id ? 'selected' : ''}`}
                               onClick={this.selectItem.bind(this,p)}>
                        <span className="daily__item_col">{_typeName}</span>
                        <span className="daily__item_col">{p.hour}</span>
                        <span className="daily__item_col">{p.trophy}</span>
                        <span className="daily__item_col-long">{p.name}</span>
                    </li>
                }.bind(this))
            }
        </ul>
    }

}

var mapStateToProps = function (state) {
    return {
        type: state.item_type
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(dailyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyShow)

//export default DailyShow;