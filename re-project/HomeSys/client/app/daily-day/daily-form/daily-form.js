import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../../actions/dailyAction';
import globalActions from '../../../actions/globalAction';
class DailyForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            type: null,
            hour: 0,
            trophy: 0,
            content: null,
            typeItems: this.props.type.item_type.data.filter((o)=> o.type == 'item')
        };
        this.inputChange = this.inputChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.getValues = this.getValues.bind(this);
        this.props.selectItemType(this.state.typeItems[0]);
    }

    inputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    selectChange(e) {
        this.setState({[e.target.name]: e.target.value});
        this.props.selectItemType(this.props.type.item_type.data.find((o)=> o.id == e.target.value));
    }

    getValues(e) {
        this.props.insetDaily({
            date: this.props.date,
            type: this.state.type,
            hour: this.state.hour,
            trophy: this.state.trophy,
            content: this.state.content,
        })
    }

    render() {
        return <div className="flex__1 daily__form">
            <div className="input__row">
                <span className="input__label">Type</span>
                <select
                    name="type"
                    onChange={this.selectChange}
                    value={this.state.type}>
                    {this.state.typeItems.map((o, i) => {
                        return <option key={i} value={o.id}>{o.name}</option>;
                    })}
                </select>
            </div>
            <div className="input__row">
                <span className="input__label">Hour</span>
                <input value={this.state.hour} onChange={this.inputChange} name="hour"/>
            </div>
            <div className="input__row">
                <span className="input__label">Trophy</span>
                <input value={this.state.trophy} onChange={this.inputChange} name="trophy"/>
            </div>
            <div className="input__row">
                <span className="input__label">Content</span>
                <input />
            </div>
            <div className="input__row">
                <a className="app__button_default" onClick={this.getValues}>Add</a>
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
    return bindActionCreators(dailyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyForm)
