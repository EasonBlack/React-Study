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
        this.saveDaily = this.saveDaily.bind(this);
        this.updateDaily = this.updateDaily.bind(this);
        this.clearDaily = this.clearDaily.bind(this);
        this.deleteDaily = this.deleteDaily.bind(this);
        this.props.selectItemType(this.state.typeItems[0]);
    }

    inputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    selectChange(e) {
        this.setState({[e.target.name]: e.target.value});
        this.props.selectItemType(this.props.type.item_type.data.find((o)=> o.id == e.target.value));
        this.props.fetchRichItem({type: e.target.value});
    }

    clearDaily(e){
        this.props.clearDaily();
        this.setState({
            id: null,
            type: null,
            hour: 0,
            trophy: 0,
            content: null,
        });
    }


    updateDaily(){
        this.clearDaily();
        this.props.updateDaily({
            date: this.props.date,
            id: this.state.id,
            type: this.state.type,
            hour: this.state.hour,
            trophy: this.state.trophy,
            content: this.state.content
        })
    }

    deleteDaily() {
        this.clearDaily();
        this.props.deleteDaily({
            date: this.props.date,
            id: this.state.id
        })
    }

    saveDaily(e) {
        if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'simple') {
            let _content = this.props.daily.selectedRichItem;
            this.props.insetDaily({
                date: this.props.date,
                type: this.state.type,
                hour: this.state.hour,
                trophy: this.state.trophy,
                content: _content
            })
        } else if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'rich') {
            this.props.insetRichDaily({
                date: this.props.date,
                type: this.state.type,
                hour: this.state.hour,
                trophy: this.state.trophy,
                item_name: this.props.daily.rich_item.item_name,
                item_author: this.props.daily.rich_item.item_author,
                item_comment: this.props.daily.rich_item.item_comment
            })
        } else if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'series') {
            this.props.insertSeriesDaily({
                date: this.props.date,
                type: this.state.type,
                hour: this.state.hour,
                trophy: this.state.trophy,
                item_id: this.props.daily.series_item.item_id,
                item_episode: this.props.daily.series_item.item_episode,
            })
        } else if (this.props.daily.selectedCategory && this.props.daily.selectedCategory.item_type == 'book') {
            this.props.insertSeriesDaily({
                date: this.props.date,
                type: this.state.type,
                hour: this.state.hour,
                trophy: this.state.trophy,
                item_id: this.props.daily.series_item.item_id
            })
        }

    }

    componentWillReceiveProps(nextProps) {
        let select_daily = nextProps.daily.select_daily;
        if(!select_daily) return ;
        this.setState({
            id: select_daily.id,
            type: select_daily.type,
            hour: select_daily.hour,
            trophy: select_daily.trophy,
            content: select_daily.content,
        });
    }

    render() {
        let _select_id = this.props.daily.select_daily? this.props.daily.select_daily.id : 0;
        if(_select_id) {

        }
        let _types = this.props.type.item_type.data.filter((o)=> o.type == 'item');
        return <div className="flex__1 daily__form">
            <div className="input__row">
                <span className="input__label">Type</span>
                <select className="input__select"
                        name="type"
                        onChange={this.selectChange}
                        value={this.state.type}>
                    <option></option>
                    {_types.map((o, i) => {
                        return <option key={i} value={o.id}>{o.name}</option>;
                    })}
                </select>
            </div>
            <div className="input__row">
                <span className="input__label">Hour</span>
                <input className="input___size_medium" value={this.state.hour} onChange={this.inputChange} name="hour"/>
            </div>
            <div className="input__row">
                <span className="input__label">Trophy</span>
                <input className="input___size_medium" value={this.state.trophy} onChange={this.inputChange}
                       name="trophy"/>
            </div>
            <div className="input__row">
                <a className="app__button_default" onClick={this.saveDaily}>Add</a>
                <a className="app__button_default" onClick={this.updateDaily}>Update</a>
                <a className="app__button_default" onClick={this.clearDaily}>Clear</a>
                <a className="app__button_default" onClick={this.deleteDaily}>Delete</a>
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
