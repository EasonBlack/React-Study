import $ from 'jquery';
import moment from 'moment';

let bookActions= {
    fetchAllBook: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "/richitem/2",
                success: function (res) {
                    dispatch(bookActions.showAllBook(res));
                }
            })
        }
    },

    setStatus: function (status) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: `/richitem/setfinish/${status}`,   //10 finish
                success: function (res) {
                    dispatch(bookActions.showAllBook(res));
                }
            })
        }
    },

    showAllBook: function(p) {
        return {
            type: 'BOOK_LIST_SHOW',
            result: p
        }
    }
}

export default bookActions;