import $ from 'jquery';

let dailyList = {
    fetch: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "/daily",
                success: function (res) {
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    insetDaily: function(object) {
        return (dispatch) => {
           $.ajax({
               type: "POST",
               url: "/daily",
               data: object,
               success: (res)=>{
                   //dailyList.fetchByDate(object.date);
                   dispatch(dailyList.showList(res));
               }
           })
        }
    },

    fetchByDate: function (date) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "/daily/" + date,
                success: function (res) {
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    showList: function (p) {
        return {
            type: 'DAILY_LIST_SHOW',
            daily_list: p
        }
    },

    selectItemType: function(type) {
        return {
            type: 'DAILY_ITEM_TYPE',
            selectedCategory: type
        }
    }

}

export default dailyList;