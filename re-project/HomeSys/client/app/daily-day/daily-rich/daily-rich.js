import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import dailyActions from '../../../actions/dailyAction';

class DailyRich extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            'item_name': '',
            'item_author': '',
            'item_comment': 3
        };
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.setState({[e.target.name]: e.target.value}, ()=>{
            this.props.setRichItem({
                item_name: this.state.item_name,
                item_author: this.state.item_author,
                item_comment: this.state.item_comment
            })
        });
    }

    render() {
        return <div className="flex__1 daily__section">
            <div className="input__row">
                <span className="input__label">NAME</span>
                <input value={this.state.item_name} onChange={this.inputChange} name="item_name"/>
            </div>
            <div className="input__row">
                <span className="input__label">AUTHOR</span>
                <input value={this.state.item_author} onChange={this.inputChange} name="item_author"/>
            </div>
            <div className="input__row">
                <span className="input__label">COMMENT</span>
                <select value={this.state.item_comment}  onChange={this.inputChange} name="item_comment">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyRich)