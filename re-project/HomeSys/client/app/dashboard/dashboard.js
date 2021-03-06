import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import staticActions from '../../actions/staticAction';
import  Chart7DaysSum from  './dashboard-7days-sum';
import  Chart7DaysBarChart from  './dashboard-7days-barchart';

class DashBoard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.fetchDailyGroupSum({});
    }


    render() {
        return <div className="flex__row">
            <div className="flex__300">
                <Chart7DaysSum
                    charttitle = "ALL GROUP"
                    rows={this.props.static.static_group_sum ?  this.props.static.static_group_sum.data :[]}>
                </Chart7DaysSum>
            </div>
            <div className="flex__1 bg__lightgrey" >
                <Chart7DaysBarChart
                    rows={this.props.static.static_group_sum ?  this.props.static.static_group_sum.data :[]}>
                </Chart7DaysBarChart>
            </div>
           </div>;
    }
}


var mapStateToProps = function (state) {
    return {
        static: state.static
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(staticActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)