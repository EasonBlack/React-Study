import $ from 'jquery';
import moment from 'moment';

function setFinish(row) {
    return (dispatch) => {
        $.ajax({
            type: "POST",
            url: `/richitem/setstate/${row.id}/10`,
            success: function (res)  {
                fetchAllBook()(dispatch);
                //dispatch(bookActions.showAllBook(res));
            }
        })
    }
}

function fetchAllBook(object) {
    return (dispatch) => {
        $.ajax({
            type: "GET",
            url: "/richitem/2",
            success: function (res) {
                dispatch(bookActions.showAllBook(res));
            }
        })
    }
}

let bookActions= {
    fetchAllBook: fetchAllBook,

    setFinish: setFinish,

    showAllBook: function(p) {
        return {
            type: 'BOOK_LIST_SHOW',
            result: p
        }
    }
}

export default bookActions;