import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import bookActions from '../../actions/bookAction';
import  AppTable from  '../common/table/table'

class Book extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.fetchAllBook();
    }


    render() {
        return <div>
            <div className="page__title"></div>
            <AppTable
                headers="id,name,author,state,action"
                finishAction={this.props.setStatus.bind(this, 10)}
                rows={this.props.book.booklist?this.props.book.booklist.data:[]}>
            </AppTable>
        </div>;
    }
}


var mapStateToProps = function (state) {
    return {
        book: state.book
    }
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(bookActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)