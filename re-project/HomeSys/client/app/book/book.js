import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import bookActions from '../../actions/bookAction';
import  BookTable from  './book-table'

class Book extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.fetchAllBook();
    }


    render() {
        return <div >
            <div className="page__title"></div>
            <BookTable
                headers="id,name,author,state_name,finishaction"
                finish={this.props.setFinish}
                rows={this.props.book.booklist?this.props.book.booklist.data:[]}>
            </BookTable>
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