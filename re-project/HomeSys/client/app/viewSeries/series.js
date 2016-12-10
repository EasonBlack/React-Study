import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import richActions from '../../actions/richAction';
import SeriesTable from  './series-table'

class Series extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.fetchAllRich(3);
    }


    render() {
        return <div >
            <div className="page__title"></div>
            <SeriesTable
                headers="id,name,author,state_name,items"
                rows={this.props.rich.richlist ? this.props.rich.richlist.data:[]}>
            </SeriesTable>
        </div>;
    }
}


var mapStateToProps = function (state) {
    return {
        rich: state.rich
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(richActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Series)